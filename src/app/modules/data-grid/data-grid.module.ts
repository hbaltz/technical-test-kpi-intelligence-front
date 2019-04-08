import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { GetConfigService } from './services/get-config/get-config.service';


@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents(null)
  ],
  providers: [GetConfigService],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class DataGridModule {}
