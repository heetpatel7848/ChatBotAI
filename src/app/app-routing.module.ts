import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { PriceChangeComponent } from './price-change/price-change.component';
const routes: Routes = [
  { path: 'items', component: ItemComponent },
  { path: 'price-change', component: PriceChangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
