export interface Data {
  tasks: any;
  columns: any;
  columnOrder: string[];
  homeIndex?: number
}

export interface ColumnData {
    key: string;
    column: any;
    tasks: any;
    isDropDisabled: boolean;
}

export interface TaskData {
    key: string;
    index: number;
    task: any;
}