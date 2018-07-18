import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Ah home......page! There's no place like it.</h2>
      </div>
    </div>
`,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: orangered;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
