import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogService } from '../services/generic-dialog.service';

@Component({
  selector: 'factory-ui-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly genericDialogService: GenericDialogService) { }

  public onCancelClick(): void {
    this.genericDialogService.executeCloseFunction = false;
    this.dialogRef.close();
  }
}
