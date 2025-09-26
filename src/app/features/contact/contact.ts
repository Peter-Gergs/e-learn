import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contact = { name: '', email: '', message: '' };
  submitted = false;

  submitContact() {
    this.submitted = true;
    // In a real app, send the message to the backend here
    setTimeout(() => (this.submitted = false), 4000);
  }
}
