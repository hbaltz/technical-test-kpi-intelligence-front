import { ElementRef, Input, OnInit } from '@angular/core';
import { AgGridEvent, ColDef, GridApi, GridOptions } from 'ag-grid';

/**
 * Parent of data-grid classes
 *
 * @export
 * @abstract
 * @class DataGridComponent
 * @implements {OnInit}
 */
export abstract class DataGridComponent implements OnInit {

  /**
   * Grid options
   *
   * @type {GridOptions}
   * @memberof DataGridComponent
   */
  public gridOptions: GridOptions;

  /**
   * Ag-grid api
   *
   * @type {GridApi}
   * @memberof DataGridComponent
   */
  public gridApi: GridApi;

  /**
   * Ag-grid parameter
   *
   * @type {AgGridEvent}
   * @memberof DataGridComponent
   */
  public paramGrid: AgGridEvent;

  /**
   * Components used in the framework
   *
   * @type {Object}
   * @memberof DataGridComponent
   */
  public frameworkComponents: Object;

  /**
   * Locale text
   *
   * @type {Object}
   * @memberof DataGridComponent
   */
  public localeText: Object;

  /**
   * True if we can only read the object
   *
   * @type {boolean}
   * @memberof DataGridComponent
   */
  @Input() public isreadonlyenabled: boolean;

  /**
   * Column definition
   *
   * @type {ColDef[]}
   * @memberof DataGridComponent
   */
  @Input() columnDefs: ColDef[];

  /**
   * Data grid
   *
   * @type {any[]}
   * @memberof DataGridComponent
   */
  @Input() data: any[];

  /**
   * Constructor
   *
   * @memberof DataGridComponent
   */
  constructor(
  ) {
  }

  /**
   * Angular init
   * @memberof DataGridComponent
   */
  ngOnInit() {
    this.initColDefs();
    this.initGrid();
  }

  /**
   * Initiliaze the data grid
   *
   * @memberof DataGridComponent
   */
  abstract initGrid(): void;

  /**
   * Initiliaze the data grid columns 
   *
   * @memberof DataGridComponent
   */
  abstract initColDefs(): void;

  /**
   * Update data in the grid
   *
   * @abstract
   * @param {*} data
   * @memberof DataGridComponent
   */
  abstract updateData(data: any): void;

  /**
   * Called when the data grid is ready
   *
   * @param {AgGridEvent} params
   * @memberof DataGridComponent
   */
  public onGridReady(params: AgGridEvent): void {
    this.paramGrid = params;
    this.gridApi = params.api;

    this.autoSizeAll(params);
  }

  /**size the data-grid
   * 
   *
   * @protected
   * @memberof DataGridComponent
   */
  protected autoSizeAll(params: AgGridEvent) {
    const allColumnIds = [];
    params.columnApi.getAllColumns().forEach(column => {
      allColumnIds.push(column.getId());
    });
    params.columnApi.autoSizeColumns(allColumnIds);
    params.api.sizeColumnsToFit();
  }
}
