import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Table1Service {

  apiUrl :any

  constructor(private _http:HttpClient) { }

  getalldata(){
    this.apiUrl = "https://iro-richardsonmaturitymodel.herokuapp.com/swaggers/level-two-detail-complaince?url=https://petstore.swagger.io/v2/swagger.json"
  
    return this._http.get < any[] > (this.apiUrl);
  }

}
