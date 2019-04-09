import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AgGridModule } from "ag-grid-angular";
import { DataGridModule } from "./modules/data-grid/data-grid.module";
import { HttpClientModule } from "@angular/common/http";
import { FilterComponent } from './components/filter/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents(null),
    DataGridModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
