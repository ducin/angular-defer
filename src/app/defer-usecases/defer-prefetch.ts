import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LazyPrefetchComponent } from './lazy-prefetch';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'defer-prefetch',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyPrefetchComponent, LazySharedComponent, StUpIdCaSePipe, HighlightDirective],
  template: `
    <app-box>
      <content>📚 <code>&#64;defer</code> allows to specify conditions when prefetching of the dependencies should be triggered. You can use a special <code>prefetch</code> keyword. <code>prefetch</code> syntax works similarly to the main defer conditions, and accepts <code>when</code> and/or <code>on</code> to declare the trigger.</content>
      <content>💡 Common pattern: <code>&#64;defer (on interaction; prefetch on idle)</code> - display something as the user really needs it, but prefetch when the browser is not busy.</content>
      <content>🖐️ loading itself is triggered by interaction in the example below. Prefetching starts <code>on timer(2s)</code>.</content>
    </app-box>

    @defer (on interaction; prefetch on timer(2s)) {
      <lazy-prefetch>
        <article>
          some content
        </article>
      </lazy-prefetch>
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me</strong> 👈
        <div>
        <code>prefetch on timer(2s)</code> will start after 2 seconds pass
        </div>
      </app-button>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferPrefetchComponent {
}
