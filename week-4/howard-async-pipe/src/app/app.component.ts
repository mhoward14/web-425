import { Component } from '@angular/core';
import {Observable} from 'rxjs/';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
  <br /><br />
  <header>Grocery List</header>
  <div class="table-responsive">
    <table class="table table-striped table-hover table-sm">
    <thead class="thead-primary">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Type of Fruit</th>
          <th scope="col">Price Per Pound</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let fruit of fruits | async">
          <td>{{fruit.id}}</td>
          <td>{{fruit.name}}</td>
          <td>{{fruit.pricePerPound}}</td>
          <td>{{fruit.quantity}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'Howard-Async-Pipe';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
