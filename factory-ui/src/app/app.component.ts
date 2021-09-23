import { Component, OnInit } from '@angular/core';
import { DeviceCommand, DeviceInformation, DeviceManagerItem, GenericDialogField, GenericDialogService, TableColumnDefinition, TableColumnType } from 'projects/factory-ui-lib/src/public-api';
import { map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { DeviceInformationPipe } from 'projects/factory-ui-lib/src/lib/device-manager/pipes/device-informatin.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public columnDefinitions: Array<TableColumnDefinition> = [
    {id: 'name', description: 'Name', type: TableColumnType.Text},
    {id: 'age', description: 'Alter', type: TableColumnType.Text},
    {id: 'address', description: 'Adresse', type: TableColumnType.Text},
  ];
  public tableData: Array<any> = [
    {name: 'Thomas Meier', age: '42', address: 'Bahnhofstrasse 10, 9000 St.Gallen'},
    {name: 'Fritz Muster', age: '31', address: 'Oberstrasse 106, 9000 St.Gallen'},
    {name: 'John Travolta', age: '19', address: 'Dorfweg 1, 8000 Zürich'},
  ];

  public dialogValues: Array<GenericDialogField> = [
    {id: 'name', labelName: 'Name', value: "Hans"},
    {id: 'age', labelName: 'Alter', value: ""},
  ];
  public columnDefinitionIds: any =this.columnDefinitions.map(item => item.id);

  constructor(
    public readonly genericDialogService: GenericDialogService
  ) {

   }

  public onOpenGenericDialog(): void {

    this.genericDialogService.openDialog(     
      "Sample Title",
      "Description of what will happen in this dialog.",
      this.dialogValues,
      () => {
        console.warn("Dialog has been closed.", this.dialogValues)
      });
  }

  public onAddGridData(): void {
    this.tableData.push({name: 'Thomas Meier', age: '42', address: 'Bahnhofstrasse 10, 9000 St.Gallen'});
    this.tableData = [...this.tableData];
  }
}
