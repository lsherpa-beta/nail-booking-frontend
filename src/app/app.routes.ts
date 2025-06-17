import { Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { Confirmation } from './components/confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'confirmation', component: Confirmation }
];
