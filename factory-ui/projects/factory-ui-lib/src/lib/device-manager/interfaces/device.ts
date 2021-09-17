import { Observable } from "rxjs";

export interface Device {
    Id: number;

    Type: string;

    IpAddress: string;

    Name: string;

    Description: string;

    Test: string;
}

export interface DeviceInformation {
    DeviceId: number;

    Description: string;

    Commands: Array<DeviceCommand>;

    Command: DeviceCommand;

    State: string;
}

export interface DeviceCommand {
    DeviceId: number;

    Command: string;
}

export interface DeviceManagerItem {
    IsLoading: boolean;

    IsReadOnly: boolean;

    Device: Device;

    DeviceInformation?: Observable<DeviceInformation>;

    getDeviceInformation(): Observable<DeviceInformation>;

    executeCommand(command: DeviceCommand): Observable<void>;
}
