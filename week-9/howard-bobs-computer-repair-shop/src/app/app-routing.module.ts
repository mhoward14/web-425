
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from '../app/invoice/invoice.component';
import {HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'invoice', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
