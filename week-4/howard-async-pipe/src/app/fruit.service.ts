import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs/';
import {Fruit} from './fruit';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: 'Pink Lady Apple', pricePerPound: '2.99', quantity: 4},
    {id: 2, name: 'Banana', pricePerPound: '.79', quantity: 1},
    {id: 3, name: 'Blood Orange', pricePerPound: '1.59', quantity: 5},
    {id: 4, name: 'Grapes', pricePerPound: '2.25', quantity: 1},
    {id: 5, name: 'Strawberries', pricePerPound: '4.50', quantity: 2}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
