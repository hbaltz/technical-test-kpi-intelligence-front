import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from 'src/app/model/investment/investment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the investments
   * @param url the url of the api
   */
  public getInvestments(url?: string){
    return this.httpClient.get<Investment[]>(`${this.apiURL}/investment`);
  }

  /**
   * Get the investments filtered by city and/or progress status
   * @param city the city's name
   * @param progress_status the progress status
   */
  public getInvestmentsWithFilter(city: string, progress_status: string){
    let url = `${this.apiURL}/investment`;
    if (city && progress_status){
      url += '?city=' + city + '&progress_status=' + progress_status;
    } else if (city) {
      url += '?city=' + city;
    } else {
      url += '?progress_status=' + progress_status;
    }

    return this.httpClient.get<Investment[]>(url);
  }

  /**
   * Get the investments depending on his id
   * @param url the url of the api
   */
  public getInvestmentsById(id: number){
      return this.httpClient.get(`${this.apiURL}/investment/${id}`);
  }
}
