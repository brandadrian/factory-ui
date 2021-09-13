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




@NgModule({
  declarations: [
    FactoryUiLibComponent,
    GenericDialogComponent,
    TableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule
  ],
  exports: [
    FactoryUiLibComponent,
    GenericDialogComponent,
    TableComponent
  ]
})
export class FactoryUiLibModule { }
