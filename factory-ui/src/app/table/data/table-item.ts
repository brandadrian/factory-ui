export interface TableColumnDefinition {
    id: string;
    description: string;
    type: TableColumnType;
}

export interface TableRow {
    name: string;
    age: string;
}

export enum TableColumnType{
    Text,
    NumberInt,
    NumberDouble,
    Date
} 