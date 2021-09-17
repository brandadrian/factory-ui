import { Component, OnInit } from '@angular/core';
import { DeviceCommand, DeviceInformation, DeviceManagerItem } from 'projects/factory-ui-lib/src/public-api';
import { tap, map, delay } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-device-manager-demo',
  templateUrl: './device-manager-demo.component.html',
  styleUrls: ['./device-manager-demo.component.scss']
})
export class DeviceManagerDemoComponent {
  private lightCommandsMockFromBackend = [
    {
      DeviceId: 1,
      Command: "LightOn"
    },
    {
      DeviceId: 1,
      Command: "LightOff"
    }];

  private lightDeviceInformationMockFromBackend = {
    DeviceId: 1,
    Description: "Light swtich",
    Commands: this.lightCommandsMockFromBackend,
    Command: this.lightCommandsMockFromBackend[0],
    State: "online"
  };

  private musicCommandsMockFromBackend = [
    {
      DeviceId: 2,
      Command: "MusicOn"
    },
    {
      DeviceId: 2,
      Command: "MusicOff"
    },
    {
      DeviceId: 2,
      Command: "VolumeUp"
    },
    {
      DeviceId: 2,
      Command: "VolumeDown"
    }];

  private musicDeviceInformationMockFromBackend = {
    DeviceId: 1,
    Description: "Music swtich",
    Commands: this.musicCommandsMockFromBackend,
    Command: this.musicCommandsMockFromBackend[0],
    State: "online"
  };

  private isCommandExecuting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isCommandExecuting$: Observable<boolean> = this.isCommandExecuting.asObservable();

  constructor() { }

  private executeMusicCommandInternal(command: DeviceCommand): Observable<any> {
    this.musicDeviceInformationMockFromBackend.Command = command;
    return of({});
  }

  private getMusicDeviceInformationInternal(): Observable<DeviceInformation> {
    return  of(this.musicDeviceInformationMockFromBackend).pipe(delay(2000));
  }

  private executeLightCommandInternal(command: DeviceCommand): Observable<any> {
    this.lightDeviceInformationMockFromBackend.Command = command;
    return of({});
  }

  private getLightDeviceInformationInternal(): Observable<DeviceInformation> {
    return  of(this.lightDeviceInformationMockFromBackend).pipe(delay(2000));
  }
  
  public deviceManagerItems$: Observable<Array<DeviceManagerItem>> = of([
    {
      IsLoading: false,
      IsReadOnly: false,
      Device:     {
        Id: 1,
        Type: "lightSwitch",
        IpAddress: "192.168.1.180",
        Name: "Light Switch",
        Description: "Turn light on and off",
        Test: "test"
      }
      ,
      DeviceInformation: this.getLightDeviceInformationInternal().pipe(map(deviceInformation => deviceInformation)),
      getDeviceInformation: () => this.getLightDeviceInformationInternal(),
      executeCommand: (command: DeviceCommand) => this.executeLightCommandInternal(command)   
  },
  {
    IsLoading: false,
    IsReadOnly: false,
    Device:     {
      Id: 1,
      Type: "musicSwitch",
      IpAddress: "192.168.1.181",
      Name: "Music Switch",
      Description: "Turn music on and off and control volume",
      Test: "test"
    }
    ,
    DeviceInformation: this.getMusicDeviceInformationInternal().pipe(map(deviceInformation => deviceInformation)),
    getDeviceInformation: () => this.getMusicDeviceInformationInternal(),
    executeCommand: (command: DeviceCommand) => this.executeMusicCommandInternal(command)   
}
  ]);
}
