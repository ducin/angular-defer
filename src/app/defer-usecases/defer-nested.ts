import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LazyNestedComponent } from './lazy-nested';
import { LegacyModule } from './legacy/legacy.module';
import { LazyNestedFurtherComponent } from './lazy-nested-further';

@Component({
  selector: 'defer-nested',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyNestedComponent, LazyNestedFurtherComponent],
  template: `
    <app-box>
      <content>📚 When you have <strong>nested</strong> <code>&#64;defer</code> blocks, make sure that an inner one has a different set of conditions, so that they don't trigger at the same time, causing cascading requests.</content>
    </app-box>

    @defer (on timer(2s)) {
      <lazy-nested>
        <article>
          some <code>&#64;defer (on timer(2s))</code> content

          @defer (on interaction) {
            <lazy-nested-further>
              <article>
                some <code>&#64;defer (on interaction)</code> content
              </article>
            </lazy-nested-further>
          } @placeholder (minimum 500ms) {
            <app-button>👉 interact with me (the placeholder) to load content 👈</app-button>
          }

        </article>
      </lazy-nested>
    } @placeholder (minimum 500ms) {
      waiting 2s...
    }
  `,
})
export class DeferNestedComponent {
}
