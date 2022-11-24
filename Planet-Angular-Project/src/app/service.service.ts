import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  planetData: any[] = [];

  constructor(private http: HttpClient) { }

  public homePlanet() {
    this.http.get(`https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list`, {
      "headers": {
        'X-RapidAPI-Key': '711b86254cmsh3ddaabf1a375146p12b4a3jsnb183386ea0c5',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
      }
    }).subscribe(response => {
      this.planetData[0] = response;
    });
  }

}


