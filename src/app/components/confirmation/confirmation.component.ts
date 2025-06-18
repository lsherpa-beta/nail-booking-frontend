import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  name: string = '';
  date: string = '';
  time: string = '';

  constructor() {
    const state = history.state;
    this.name = state.name || '';
    this.date = state.date ? new Date(state.date).toDateString() : '';
    this.time = state.time || '';
  }
}
