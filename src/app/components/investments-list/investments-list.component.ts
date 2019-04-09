import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { Investment } from 'src/app/model/investment/investment';

@Component({
  selector: 'app-investments-list',
  templateUrl: './investments-list.component.html',
  styleUrls: ['./investments-list.component.css']
})
export class InvestmentsListComponent {

   /**
   * Constructor
   * @param apiService 
   */
  constructor(private apiService: ApiService){}

  /**
   * The investment to display
   */
  public rowData: Investment[];

  /**
   * The investment to display
   */
  public loading: boolean;


  /**
   * Get all the investments
   */
  public initData(){
    this.loading = true;
    this.apiService.getInvestments().subscribe((res)=>{
      this.rowData = res;
      this.loading = false;
    });  
  }  
  
  /**
   * Get investments filtered by city and progress status
   */
  public filterData(e){
    this.loading = true;
    this.apiService.getInvestmentsWithFilter(e.city, e.progress_status).subscribe((res)=>{
      this.rowData = res;
      this.loading = false;
    });  
  } 

}
