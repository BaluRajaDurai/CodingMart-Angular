import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  
  model: HomeModel = {
    district: '',
    area: '',
    pop: ''
  };
  constructor() { }

  ngOnInit(): void {
    this.onSubmit();

  }

  onSubmit() : void {
    let district = this.model.district;
    let area = this.model.area;
    let pop = this.model.pop;
    console.log(district);
    console.log(area);
    console.log(pop);
  }

}
  
export interface HomeModel 
{
  district:string;
  area:string;
  pop:string;
}