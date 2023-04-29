import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Array<Coffee> = [];
  originCoffeCount: number = 0;
  blendCoffeeCount: number = 0;
  constructor(private coffeeService: CoffeeService) { }
  getCoffeList() {
    this.coffeeService.getCoffees().subscribe(coffees =>{
      this.coffees = coffees;
      this.originCoffeCount = coffees.filter(function (x) {return x.tipo.includes("Origen")}).length;
      this.blendCoffeeCount = coffees.filter(function (x) {return x.tipo.includes("Blend")}).length;
    });
  }

  ngOnInit() {
    this.getCoffeList();
  }

}
