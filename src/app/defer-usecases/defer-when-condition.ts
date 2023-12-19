import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LazyWhenConditionComponent } from './lazy-when-condition';
import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'defer-when-condition',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, LazyWhenConditionComponent, LazySharedComponent, StUpIdCaSePipe, HighlightDirective],
  template: `
    <app-box>
      <content>📚 if the <code>when</code> condition switches back to <code>false</code>, the defer block is <strong>not reverted back</strong> to the placeholder. The swap is a one-time operation. If the content within the block should be conditionally rendered, an <code>if</code> condition can be used within the block itself.</content>
      <content>🖐️ toggle the checkbox; when checked, the <code>&#64;defer (when isVisible)</code> condition will switch to true.</content>
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

      <h2>pipe</h2>
      {{ "Lazy loaded pipe here" | StUpIdCaSe }}

      <h2>directive</h2>
      <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
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
