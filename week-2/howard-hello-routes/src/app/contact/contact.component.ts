import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <div class="row">
        <h2>Want to contact us?! You're in the right place!</h2>
      </div>
    </div>
`,
styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: steelblue;
  }
  `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
