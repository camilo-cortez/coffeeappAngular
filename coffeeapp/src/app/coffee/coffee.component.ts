import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Array<Coffee> = [];
  constructor() { }
  getCoffeList(): Array<Coffee>{
    return [];
  }

  ngOnInit() {
    this.coffees = this.getCoffeList();
  }

}
