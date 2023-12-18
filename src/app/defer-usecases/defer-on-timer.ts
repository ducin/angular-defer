import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazySharedComponent } from './lazy-shared';
import { LazyOnTimerComponent } from './lazy-on-timer';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-on-timer',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyOnTimerComponent, LazySharedComponent],
  template: `
    <app-box>
      <content><code>timer(x)</code> would trigger after a specified duration.</content>
    </app-box>

    @defer (on timer(2000ms)) {
      <lazy-on-timer>
        <article>
          some <code>&#64;defer (on timer(2000ms))</code> content
        </article>
      </lazy-on-timer>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on timer(2000ms))</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
        some <code>&#64;defer (on timer(2000ms))</code> content
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
export class DeferOnTimerComponent {
}
