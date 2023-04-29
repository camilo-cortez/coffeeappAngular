import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { CoffeeComponent } from './coffee.component';
import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee';


describe('BookListComponent', () => {
 let component: CoffeeComponent;
 let fixture: ComponentFixture<CoffeeComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CoffeeComponent ],
     providers: [ CoffeeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CoffeeComponent);
   component = fixture.componentInstance;

   component.coffees = [
     new Coffee(
      faker.datatype.number(1000),
      faker.name.firstName(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.datatype.number({min: 900, max: 1500}),
      faker.image.food()
      )
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.coffees[0].id.toString())
 });

});
