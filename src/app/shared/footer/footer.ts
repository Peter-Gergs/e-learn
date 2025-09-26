import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  newsletterSuccess = false;
  year = new Date().getFullYear();
}
