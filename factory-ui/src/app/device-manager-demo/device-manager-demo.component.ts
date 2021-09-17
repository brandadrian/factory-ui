import { Component, OnInit } from '@angular/core';
import { DeviceCommand, DeviceInformation, DeviceManagerItem } from 'projects/factory-ui-lib/src/public-api';
import { tap, map, delay } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-device-manager-demo',
  templateUrl: './device-manager-demo.component.html',
  styleUrls: ['./device-manager-demo.component.scss']
})
export class DeviceManagerDemoComponent implements OnInit {
  private commandsMockFromBackend = [
    {
      DeviceId: 1,
      Command: "LightOn"
    },
    {
      DeviceId: 1,
      Command: "LightOff"
    }];

  private deviceInformationMockFromBackend = {
    DeviceId: 1,
    Description: "Light swtich",
    Commands: this.commandsMockFromBackend,
    Command: this.commandsMockFromBackend[0],
    State: "online"
  };


  public commandChange: Subject<DeviceCommand> = new Subject();
  private isCommandExecuting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isCommandExecuting$: Observable<boolean> = this.isCommandExecuting.asObservable();


  constructor() { }

  public ngOnInit(): void {
    this.commandChange.pipe(tap((deviceCommand: DeviceCommand) => {
      setTimeout(() => this.isCommandExecuting.next(false), 2000 ); 
    })).subscribe();
  }

  private executeCommandInternal(command: DeviceCommand): Observable<any> {
    this.deviceInformationMockFromBackend.Command = command;
    return of({});
  }

  private getDeviceInformationInternal(): Observable<DeviceInformation> {
    return  of(this.deviceInformationMockFromBackend).pipe(delay(2000));
  }
  
  public deviceManagerItems$: Observable<Array<DeviceManagerItem>> = of([
    {
      IsLoading: false,
      IsReadOnly: false,
      Device:     {
        Id: 1,
        Type: "DeviceDemo",
        IpAddress: "192.168.1.180",
        Name: "Demo Device Name",
        Description: "This is a demo device",
        Test: "test"
      }
      ,
      DeviceInformation: this.getDeviceInformationInternal().pipe(map(deviceInformation => deviceInformation)),
      getDeviceInformation: () => this.getDeviceInformationInternal(),
      executeCommand: (command: DeviceCommand) => this.executeCommandInternal(command)   
  }
  ]);
}
