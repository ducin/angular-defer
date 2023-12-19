import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LazyNestedComponent } from './lazy-nested';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'defer-nested',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyNestedComponent, LazySharedComponent, StUpIdCaSePipe, HighlightDirective],
  template: `
    <app-box>
      <content>...</content>
    </app-box>

    @defer (on idle) {
      <lazy-nested>
        <article>
          some <code>&#64;defer (on idle)</code> content
        </article>
      </lazy-nested>
    } @placeholder (minimum 500ms) {
      <app-button>👉 hover me (the placeholder) to load content 👈</app-button>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferNestedComponent {
}
