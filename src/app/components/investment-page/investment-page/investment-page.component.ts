import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/service/api/api.service";
import { Investment } from 'src/app/model/investment/investment';

@Component({
  selector: "app-investment-page",
  templateUrl: "./investment-page.component.html",
  styleUrls: ["./investment-page.component.css"]
})
export class InvestmentPageComponent {
  /**
   * The investment to display
   */
  public loading: boolean;

   /**
   * The investment to display
   */
  public Investment: Investment;

  /**
   * Constrctor
   */
  constructor(
    private _route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.loading = true;
  }

  ngAfterViewInit() {
    // When the route changes
    this._route.paramMap.subscribe(params => {
      const id = parseInt(params.get("id"));
      if (id != NaN) {
        // We recover the invesment
        this.apiService.getInvestmentsById(id).subscribe(res => {
          this.Investment = res;
          this.loading = false;
        });
      } else {
        this.loading = false;
      }
    });
  }
}
