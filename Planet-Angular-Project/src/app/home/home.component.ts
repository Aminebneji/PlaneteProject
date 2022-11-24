import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: any;
  Planet: any[] = []
  datanumber = 4;



  constructor(private http: HttpClient, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

    this.home = this.service.homePlanet();

    this.Planet = this.service.planetData
    console.log(this.Planet)

  }

  public AddOnFav(data: any) {
    console.log(data.name);

    localStorage.setItem(data.name, data.id);
    console.log(localStorage)
  }

}
