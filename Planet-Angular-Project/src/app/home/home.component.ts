import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: any;

  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit(): void {

    this.home = this.service.homePlanet();
    console.log(this.service.planetData);


  }

}
