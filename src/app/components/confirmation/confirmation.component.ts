import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule,MatButtonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  name: string = '';
  date: string = '';
  time: string = '';

  constructor(private router: Router) {
    const state = history.state;
    this.name = state.name || '';
    this.date = state.date ? new Date(state.date).toDateString() : '';
    this.time = state.time || '';
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
