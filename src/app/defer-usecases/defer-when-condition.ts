import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LazyWhenConditionComponent } from './lazy-when-condition';
import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-when-condition',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyWhenConditionComponent, LazySharedComponent],
  template: `
    <app-box>
      <content>when checked, the <code>&#64;defer (when isVisible)</code> condition will switch to true</content>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="isVisible" />
          <code>isVisible</code>
        </label>
      </div>
    </app-box>

    @defer (when isVisible) {
      <lazy-when-condition>
        <article>
          some <code>&#64;defer (when isVisible)</code> content
        </article>
      </lazy-when-condition>
      <lazy-shared>
        <article>
          some <code>&#64;defer (when isVisible)</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
          some <code>&#64;defer (when isVisible)</code> content
        </article>
      </non-standalone>
    } @placeholder (minimum 500ms) {
      placeholder is shown before <code>&#64;defer</code> is triggered
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferWhenConditionComponent {
  isVisible = false;
}
