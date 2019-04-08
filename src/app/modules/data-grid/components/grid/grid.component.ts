import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DataGridComponent } from '../../data-grid.component';
import { GridOptions } from 'ag-grid';
import { GetConfigService } from '../../services/get-config/get-config.service';

/**
 * Composant gérant les différentes grilles de l'application
 *
 * @export
 * @class GridComponent
 * @extends {RailDataGridComponent}
 * @implements {OnChanges}
 */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends DataGridComponent implements OnChanges {
  /**
   * Data
   *
   * @memberof GridComponent
   */
  @Input() public data;

  /**
   * When do we start the pagination
   *
   * @type {number}
   * @memberof GridComponent
   */
  @Input() lengthPagination: number;

  /**
   * True if you want to display the pagination
   *
   * @type {boolean}
   * @memberof GridComponent
   */
  public pagination: boolean;


  /**
   *Creates an instance of GridComponent.
   * @memberof GridComponent
   */
  constructor(
    private _getConfService: GetConfigService
  ) {
    super();
    // By default we start the pagination when we have more than ten elements
    this.lengthPagination = 10;
  }

  /**
   * Angular change
   * @param {SimpleChanges} changes
   * @memberof RailDataGridComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.pagination = this.data.length > this.lengthPagination;
    }
  }

  /**
   * Initialize he datagrid
   *
   * @memberof DataGridComponent
   */
  public initGrid(): void {
    this.gridOptions = <GridOptions>{};
  }

  /**
   * Initialize columns
   *
   * @memberof DataGridComponent
   */
  public initColDefs(): void {
    this.columnDefs = this._getConfService.getConfig();
  }

  /**
   * Update data on the grid
   *
   * @memberof DataGridComponent
   */
  updateData(data: any): void {
    if (this.gridApi) {
      this.gridApi.setRowData(data);
    }
  }
}
