import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazyOnViewportComponent } from './lazy-on-viewport';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'defer-on-viewport',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyOnViewportComponent, LazySharedComponent, StUpIdCaSePipe, HighlightDirective],
  styles: `
    .scroll-container {
      border: 1px solid var(--main-accent-color);
      border-radius: 6px;
      width: 75%;
      height: 250px;
      max-height: 50%;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
    .scroll-page {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 2em;
    }
  `,
  template: `
    <app-box>
      <content><code>viewport</code> would trigger the deferred block when the specified content enters the viewport using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">IntersectionObserver</a> API. This could be the placeholder content or an element reference.</content>
      <content><code>viewport</code> trigger <strong>with no parameters</strong> can only be placed on an <code>&#64;defer</code> that has a <code>&#64;placeholder</code> block with exactly one root element node.</content>
    </app-box>

    <div class="scroll-container box">
      <div class="scroll-page">scroll down...</div>
      <div class="scroll-page">and some more...</div>
      <div class="scroll-page">a little bit more...</div>
      <div class="scroll-page">you're almost done...</div>
      <div>

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

          <h2>pipe</h2>
          {{ "Lazy loaded pipe here" | StUpIdCaSe }}

          <h2>directive</h2>
          <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
        } @placeholder (minimum 500ms) {
          <span>waiting to get into the viewport</span>
        } @loading (after 100ms; minimum 1s) {
          <loader />
        } @error {
          something went wrong!
        }

      </div>
    </div>
  `,
})
export class DeferOnViewportComponent {
}
