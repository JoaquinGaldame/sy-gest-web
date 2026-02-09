import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { LandingHeaderComponent } from '../components/landing-header/landing-header.component';

@Component({
  selector: 'app-landing-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LandingHeaderComponent],
  templateUrl: './landing-contact-page.component.html',
  styleUrls: ['./landing-contact-page.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate(
          '450ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
})
export class LandingContactPageComponent {}
