import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentPageComponent } from './components/investment-page/investment-page/investment-page.component';
import { InvestmentsListComponent } from './components/investments-list/investments-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentsListComponent
  },
  {
    path: 'investment/:id',
    component: InvestmentPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
