import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazyOnViewportComponent } from './lazy-on-viewport';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-on-viewport',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyOnViewportComponent, LazySharedComponent],
  template: `
    <app-box>
      <content><code>viewport</code> would trigger the deferred block when the specified content enters the viewport using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">IntersectionObserver</a> API. This could be the placeholder content or an element reference.</content>
    </app-box>

    @defer (on viewport) {
      <lazy-on-viewport>
        <article>
          some <code>&#64;defer (on viewport)</code> content
        </article>
      </lazy-on-viewport>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on viewport)</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
          some <code>&#64;defer (on viewport)</code> content
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
export class DeferOnViewportComponent {
}
