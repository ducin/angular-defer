import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazyOnIdleComponent } from './lazy-on-idle';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-on-idle',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyOnIdleComponent, LazySharedComponent],
  template: `
    <app-box>
      <content><strong>By default</strong>, a <code>&#64;defer</code> block is triggered when the browser state becomes <code>idle</code>.</content>
    </app-box>

    @defer (on idle) {
      <lazy-on-idle>
        <article>
          some <code>&#64;defer (on idle)</code> content
        </article>
      </lazy-on-idle>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on idle)</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
          some <code>&#64;defer (on idle)</code> content
        </article>
      </non-standalone>
    } @placeholder (minimum 500ms) {
      <span>👉 hover me (the placeholder) to load content 👈</span>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferOnIdleComponent {
}
