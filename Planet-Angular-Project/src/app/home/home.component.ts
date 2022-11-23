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


  constructor(private http: HttpClient, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

    this.home = this.service.homePlanet();
    console.log(this.service.planetData);


  }

  PlanetOnValue(data: any) {
    this.router.navigateByUrl(`/planet/list${data.name}`);
    console.log("yo" + data.name);
  }
}
