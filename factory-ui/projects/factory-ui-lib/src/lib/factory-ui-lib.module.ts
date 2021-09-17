import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactoryUiLibComponent } from './factory-ui-lib.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericDialogComponent } from './generic-dialog/components/generic-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/components/table.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DeviceManagerComponent } from './device-manager/components/device-manager/device-manager.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FactoryUiLibComponent,
    GenericDialogComponent,
    TableComponent,
    DeviceManagerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    FactoryUiLibComponent,
    GenericDialogComponent,
    TableComponent,
    DeviceManagerComponent
  ]
})
export class FactoryUiLibModule { }
