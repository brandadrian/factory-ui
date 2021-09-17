import { Pipe, PipeTransform } from "@angular/core";
import { DeviceInformation } from "../interfaces/device";

@Pipe({
    name: 'deviceInformationPipe'
})
export class DeviceInformationPipe implements PipeTransform {
    transform(deviceInformation: Array<DeviceInformation> | null, deviceId: number): DeviceInformation | undefined {

        if (deviceInformation){
            for (let device of deviceInformation) {
                if (device.DeviceId === deviceId) {
                    return device;
                }
            }
        }

        return undefined;
    }
}