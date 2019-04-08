import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investment } from 'src/app/model/investment/investment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhosts:5000/api';

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the investments
   * @param url the url of the api
   */
  public getInvestments(url?: string){
    return this.httpClient.get<Investment[]>(`${this.apiURL}/investment`);
  }

  /**
   * Get the investments depending on his id
   * @param url the url of the api
   */
  public getInvestmentsById(id: number){
      return this.httpClient.get(`${this.apiURL}/investment/${id}`);
  }
}
