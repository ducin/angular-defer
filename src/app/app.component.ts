import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styles: `
    .gradient-text {
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
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

    nav a:hover {
      background: -webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--electric-violet) 50%,var(--vivid-pink) 100%);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    nav a.active {
      font-weight: bold;
      background: -webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--vivid-pink) 50%,var(--electric-violet) 100%);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    nav {
      padding-bottom: 10px 0px;
      margin: 4px 0px;
      border-top: 1px solid var(--main-accent-color);
      border-bottom: 1px solid var(--main-accent-color);
    }
  `,
  template: `
    <header>
      <h1 class="angular-gradient"> Angular ⚡️ <code>&#64;defer</code> ⚡️ Interactive Examples</h1>
      <section><strong>author</strong>: by Tomasz Ducin, <a href="http://ducin.it/">ducin.it</a>, <a href="https://twitter.com/tomasz_ducin">&#64;tomasz_ducin</a>, see this <a href="https://github.com/ducin/angular-defer">github repo</a></section>
      <section><strong>documentation</strong>: <a href="https://angular.dev/guide/defer">official docs</a>, <a href="https://angular.io/guide/defer">legacy docs</a></section>
      <section>Open Browser Devtools <em>Network</em> tab.</section>
    </header>
    <nav>
      <a routerLink="/about" routerLinkActive="active">💡 about this app</a>
      <a routerLink="/defer-guide" routerLinkActive="active">📚 defer guide</a>
      <br />
      <a routerLink="/defer-when-condition" routerLinkActive="active">⚡️ when condition</a>
      <a routerLink="/defer-on-idle" routerLinkActive="active">⚡️ on idle</a>
      <a routerLink="/defer-on-viewport" routerLinkActive="active">⚡️ on viewport</a>
      <a routerLink="/defer-on-interaction" routerLinkActive="active">⚡️ on interaction</a>
      <a routerLink="/defer-on-hover" routerLinkActive="active">⚡️ on hover</a>
      <a routerLink="/defer-on-immediate" routerLinkActive="active">⚡️ on immediate</a>
      <a routerLink="/defer-on-timer" routerLinkActive="active">⚡️ on timer</a>
      <br />
      <a routerLink="/defer-accordion" routerLinkActive="active">🪗 accordion</a>
      <a routerLink="/defer-multiple" routerLinkActive="active">👫 multiple deferrable</a>
      <a routerLink="/defer-npm-package" routerLinkActive="active">📦 npm package</a>
      <a routerLink="/defer-nested" routerLinkActive="active">🗃️ nested defer</a>
      <a routerLink="/defer-prefetch" routerLinkActive="active">⏱️ prefetch</a>
      <a routerLink="/defer-loading-vs-placeholder" routerLinkActive="active">🚚 loading vs placeholder</a>
      <a routerLink="/defer-error" routerLinkActive="active">💥 defer error</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-defer';
}
