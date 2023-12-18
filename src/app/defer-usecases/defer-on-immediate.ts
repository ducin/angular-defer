import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazySharedComponent } from './lazy-shared';
import { LazyOnImmediateComponent } from './lazy-on-immediate';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-on-immediate',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyOnImmediateComponent, LazySharedComponent],
  template: `
    <app-box>
      <content><code>immediate</code> triggers the deferred load immediately, meaning once the client has finished rendering, the defer chunk would then start fetching right away.</content>
    </app-box>

    @defer (on immediate) {
      <lazy-on-immediate>
        <article>
          some <code>&#64;defer (on immediate)</code> content
        </article>
      </lazy-on-immediate>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on immediate)</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
        some <code>&#64;defer (on immediate)</code> content
        </article>
      </non-standalone>
    } @placeholder (minimum 500ms) {
      <span>👉 hover me to load content 👈</span>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferOnImmediateComponent {
}
