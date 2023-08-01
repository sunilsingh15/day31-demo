import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruit: string = "durian";

  fullName: string = "Sunil Singh";

  fontSize: string = "xxx-large";

  fruits : [ {name : string, quantity: number} ] = [{name: 'Apple', quantity: 2}];

  ngOnInit(): void {
    this.fruits.push({ name: 'Mango', quantity: 10 });
    this.fruits.push({ name: 'Durian', quantity: 5 });
    this.fruits.push({ name: 'Avocado', quantity: 25 });
  }

  testClick() {
    this.fontSize = "xx-small";
  }
}
