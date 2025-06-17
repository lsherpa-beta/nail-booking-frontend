import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { Confirmation } from './components/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'confirmation', component: Confirmation }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
