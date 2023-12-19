import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LegacyModule } from './legacy/legacy.module';
import { LazyLoadingVsPlaceholder } from './lazy-loading-vs-placeholder';

@Component({
  selector: 'defer-loading-vs-placeholder',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyLoadingVsPlaceholder],
  template: `
    <app-box>
      <content>🤔 do <code>&#64;placeholder</code> and <code>&#64;loading</code> sound too familiar to each other?</content>
      <content>💡 TL;DR; <code>&#64;placeholder</code> is shown <strong>BEFORE</strong> loading starts, whereas <code>&#64;loading</code> is shown <strong>WHILE</strong> the lazy chunk is being loaded</content>
      <content>🖐️ demo below includes <code>&#64;placeholder (minimum 500ms)</code> & <code>&#64;loading (minimum 1s; after 10ms)</code>. The <code>&#64;placeholder</code> is displayed before loading is triggered (via <code>interaction</code>). Once loading is triggered, <code>&#64;loading</code> will displayed for at least 1s (<code>minimum 1s</code>). But there are 2 examples: in the first one <code>&#64;loading</code> is displayed with no conditions; in the second one <strong>loading</strong> has to last at least 100ms (<code>after 100ms</code>) until its shown.</content>
      <content>💡 it's user-friendly to avoid blinking loaders (show up and immediately disappear), so most of the times you'd like to use the <code>after 100ms</code> or so.</content>
    </app-box>

    <div>
    @defer (on interaction) {
      <lazy-loading-vs-placeholder>
        <article>
          some content
        </article>
      </lazy-loading-vs-placeholder>
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me 👈</strong>
        <div>
          <code>&#64;placeholder (minimum 500ms)</code> / <code>&#64;loading (minimum 1s)</code>
        </div></app-button>
    } @loading (minimum 1s) {
      <loader />
    }

    </div>
    <div>

    @defer (on interaction) {
      <lazy-loading-vs-placeholder>
        <article>
          some content
        </article>
      </lazy-loading-vs-placeholder>
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me</strong>  👈
        <div>
          <code>&#64;placeholder (minimum 500ms)</code> / <code>&#64;loading (minimum 1s; after 100ms)</code>
        </div>
      </app-button>
    } @loading (minimum 1s; after 100ms) {
      <loader />
    }
    </div>
  `,
})
export class DeferLoadingVsPlaceholderComponent {
}
