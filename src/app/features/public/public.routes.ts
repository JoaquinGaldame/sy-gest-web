import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { LandingSoftwarePageComponent } from './pages/landing-page/software-page/landing-software-page.component';
import { LandingGuidePageComponent } from './pages/landing-page/guide-page/landing-guide-page.component';
import { LandingAboutPageComponent } from './pages/landing-page/about-page/landing-about-page.component';
import { LandingContactPageComponent } from './pages/landing-page/contact-page/landing-contact-page.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'software',
    component: LandingSoftwarePageComponent,
  },
  {
    path: 'guide',
    component: LandingGuidePageComponent,
  },
  {
    path: 'about',
    component: LandingAboutPageComponent,
  },
  {
    path: 'contact',
    component: LandingContactPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
