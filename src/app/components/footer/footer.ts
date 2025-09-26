import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, FormsModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  newsletterSuccess = false;
  year = new Date().getFullYear();

  subscribeNewsletter(email: string) {
    if (email) {
      this.newsletterSuccess = true;
      console.log('Subscribed:', email);
    }
  }
}
