import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styles: `
    .gradient-text {
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
      background: -webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--vivid-pink) 50%,var(--electric-violet) 100%);
    }

    nav {
      background-color: var(--background-color);
      padding: 10px;
    }

    nav a {
      color: var(--text-color);
      text-decoration: none;
      margin-right: 10px;
    }

    section a {
      color: var(--electric-violet);
    }

    a.active {
      font-weight: bold;
    }
  `,
  template: `
    <h1 class="gradient-text"> Angular ⚡️ <code>&#64;defer</code> ⚡️ Live Examples</h1>
    <section>by Tomasz Ducin, <a href="http://ducin.it/">ducin.it</a>, <a href="https://twitter.com/tomasz_ducin">&#64;tomasz_ducin</a></section>
    <nav>
      <a routerLink="/" routerLinkActive="active">About</a>
      <a routerLink="/defer-when-condition" routerLinkActive="active">when condition</a>
      <a routerLink="/defer-on-hover" routerLinkActive="active">on hover</a>
      more to come...
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-defer';
}
