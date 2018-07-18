import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2> About works! This page tells you about stuff!</h2>
      </div>
    </div>
  `,
  styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: dodgerblue;
  }
`
]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
