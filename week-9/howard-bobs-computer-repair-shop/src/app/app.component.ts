import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: number;
  varTally: string;
  options: Array<object> = [
    {name: 'Password Reset ($39.99)', value: '1', checked: false, price: '39.99'},
    {name: 'Spyware Removal ($99.99)', value: '2', checked: false, price: '99.99'},
    {name: 'RAM Upgrade ($129.99)', value: '3', checked: false, price: '129.99'},
    {name: 'Software Installation ($49.99)', value: '4', checked: false, price: '49.99'},
    {name: 'Tune-up ($99.99)', value: '5', checked: false, price: '99.99'},
    {name: 'Keyboard Cleaning ($44.99)', value: '6', checked: false, price: '44.99'},
    {name: 'Disk Cleanup ($149.99)', value: '7', checked: false, price: '149.99'}
  ];

  selectedOptions() {
    console.log(this.getTally(this.options
              .filter(opt => opt.checked)
              .map(opt => opt.price)));
  }
  getTally(selected) {
  let total = 0;
  selected.forEach(element => {
    total += Number(element);
  });
  this.total = total.toFixed(2);
  return total;
}
  getWindow() {
  const w = window.open('http://localhost:4200/invoice');
  w.total = this.total;
  }
}