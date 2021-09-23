import { ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumnDefinition, TableRow } from '../data/table-item';

@Component({
  selector: 'factory-ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  @Input() public isFilterVisible: boolean = false;
  @Input() public data: Array<TableRow> = [];
  @Input() public columnDefinitions: Array<TableColumnDefinition> = [];
  public columnDefinitionIds: Array<string> = [];
  public dataSource: any;

  constructor(
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.changeDetectorRefs.detectChanges();
    }

    if (changes.columnDefinitions) {
      this.columnDefinitionIds =this.columnDefinitions.map(item => item.id);
      this.changeDetectorRefs.detectChanges();
    }
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.columnDefinitionIds =this.columnDefinitions.map(item => item.id);
    this.dataSource.sort = this.sort;
  }

  public onFilter(event: any ): void {
    this.dataSource.filter = event?.target?.value.trim().toLowerCase();
  }
}

