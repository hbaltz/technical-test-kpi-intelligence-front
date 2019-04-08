import { Component } from '@angular/core';
import { ApiService } from './service/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService){}

  public rowData;

  ngOnInit(){
    this.apiService.getInvestments().subscribe((res)=>{
      console.log(res);
      this.rowData = res;
    });  
  }    
}
