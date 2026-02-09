import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css'],
})
export class LandingHeaderComponent {
  @Output() loginRequested = new EventEmitter<void>();
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  requestLogin() {
    this.loginRequested.emit();
    this.closeMobileMenu();
  }
}
