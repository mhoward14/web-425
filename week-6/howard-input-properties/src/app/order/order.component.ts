/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 14 August 2018
Modified By: Matthew Howard
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
  `,
  styles: [`
    :host { background: dodgerblue; }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbole; string;

  constructor() { }

  ngOnInit() {
  }

}
