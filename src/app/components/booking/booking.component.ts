import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Booking, BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;
  timeSlots: string[] = ['10:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  constructor(private fb: FormBuilder,
    private router: Router, 
    private bookingService: BookingService)
    {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      date: [null, Validators.required],
      time: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.bookingForm.invalid) {
    //   this.router.navigate(['/confirmation'],{
    //     state: this.bookingForm.value
    //   });
    //   console.log('Booking Details:', this.bookingForm.value);
    //   // alert('Booking confirmed!');
    // } else {
      this.bookingForm.markAllAsTouched()
      return;
    }
  }
  
  const formValue = this.bookingForm.value;

  booking: Booking = {
    firstName: formValue.firstName,
    lastName: '',
    phoneNbr: Number(formValue.phone),
    appointmentDate: '',
    appointmentTime: ''
  };
}
