import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Device, DeviceCommand, DeviceManagerItem } from '../../interfaces/device';

@Component({
  selector: 'factory-ui-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.css']
})
export class DeviceManagerComponent {

  @Input() public commandChange: Subject<DeviceCommand> = new Subject();
  @Input() public deviceManagerItems$: Observable<Array<DeviceManagerItem>> = of([]);
  @Input() public overviewImageLink: string | null = null;
  @Input() public isReadOnly: boolean = false;

  constructor(public changeDetectorRef: ChangeDetectorRef) { 
    
   }

  public onCommandClick(deviceManagerItem: DeviceManagerItem, deviceCommand: DeviceCommand): void {
    deviceManagerItem.IsReadOnly = true;
    deviceManagerItem.IsLoading = true;
    this.changeDetectorRef.detectChanges();
    deviceManagerItem.executeCommand(deviceCommand).subscribe(() => {
      deviceManagerItem.getDeviceInformation().subscribe(result => {
        deviceManagerItem.DeviceInformation = of(result);
        deviceManagerItem.IsReadOnly = false;
        deviceManagerItem.IsLoading = false;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  public trackById(index: number, device: Device) : number {
    return device.Id;
  }

  public replaceComma(data: string | undefined) : string | undefined {
    if (!data)
      return data;

    let dataToArray = data.split(',').map(item => item.trim());
    return dataToArray.join("\n");
  }
}
