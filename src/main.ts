import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: `
    <div class="app-container">
      <header>
        <div class="brand">
          <h1>Picture Dictionary</h1>
          <p class="tagline">Learn with Visual Mnemonics</p>
        </div>
        <nav>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About Us</a>
          <a routerLink="/contact" routerLinkActive="active">Contact Us</a>
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    header {
      margin-bottom: 2rem;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .brand {
      text-align: center;
      margin-bottom: 1rem;
    }
    h1 {
      color: #333;
      margin: 0;
      font-size: 2rem;
    }
    .tagline {
      color: #666;
      margin: 0.5rem 0 0;
      font-style: italic;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      padding: 1rem 0;
      border-top: 1px solid #eee;
      margin-top: 1rem;
    }
    nav a {
      color: #666;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s;
    }
    nav a:hover {
      color: #4CAF50;
      background: #f5f5f5;
    }
    nav a.active {
      color: #4CAF50;
      font-weight: bold;
    }
    main {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 2rem;
    }
  `]
})
export class App {
  constructor() {}
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});