import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'offer-details',
    loadChildren: () => import('./offer-details/offer-details.module').then( m => m.OfferDetailsPageModule)
  },
  {
    path: 'offer-bookings',
    loadChildren: () => import('./offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
  },
  {
    path: 'new-offers',
    loadChildren: () => import('./new-offers/new-offers.module').then( m => m.NewOffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
