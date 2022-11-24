import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private http: HttpClient, private service: ServiceService, private router: Router) { }

  dataa: any;

  ngOnInit(): void {

    let dataa = localStorage.getItem(this.dataa.name)


  }

}
