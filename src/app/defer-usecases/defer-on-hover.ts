import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazyOnHoverComponent } from './lazy-on-hover';

@Component({
  selector: 'defer-on-hover',
  standalone: true,
  imports: [FormsModule, LoaderComponent, BoxComponent, LazyOnHoverComponent],
  template: `
    <app-box>
      <content>...</content>
    </app-box>

    @defer (on hover) {
      <lazy-on-hover>
        <article>
          some <code>&#64;defer (on hover)</code> content
        </article>
      </lazy-on-hover>
    } @placeholder (minimum 500ms) {
      <span>👉 hover me to load content 👈</span>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferOnHover {
}
