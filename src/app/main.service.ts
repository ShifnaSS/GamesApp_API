import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  getUrl(){
    let url = "https://www.freetogame.com/api/games";
    return this.http.get('https://www.freetogame.com/api/games');
  }
}
