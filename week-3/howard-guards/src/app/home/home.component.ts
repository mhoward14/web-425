import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Home Sweet Home</h1>
  `,
  styles:[ `
  .home {
    margin-top: 20px;
  }
  h2 {
    color: tomato;
  }
`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
