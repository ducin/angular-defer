import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './defer-usecases/loader';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  styles: `
  `,
  template: `
    <article>
      <h3>about this app</h3>
      <ul>
        <li>Open browser devtools <em>Network</em> tab:<ul>
          <li>to see <strong>bundles lazily loaded</strong></li>
          <li>to <strong>throttle</strong> your connection speed (see the spinner)</li>
        </ul></li>
        <li>Each routed component: <ul>
          <li>is statically imported on router level</li>
          <li>includes following elements in a <code>&#64;defer</code> block: <code>&#64;defer</code> block: <ol>
            <li>its <strong>dedicated</strong> (separate) lazy loaded component (each example has its own, not shared across sections)</li>
            <li>a <strong>shared</strong> component</li>
            <li>a non-standalone component (belongs to an NgModule) which won't get lazy loaded at all (lazy loading works only for <strong>standalone</strong> components</li>
            <li>a lazy loaded, <strong>shared</strong> fLiPcAsE pipe</li>
            (shared items are single instance, loaded over the newtork only for the first time, later reused)
          </ol></li>
        </ul></li>
      </ul>
    </article>
  `
})
export class AboutComponent {
}
