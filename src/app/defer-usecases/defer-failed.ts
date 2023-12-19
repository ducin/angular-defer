import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component'
import { LegacyModule } from './legacy/legacy.module';
import { LazyErrorComponent } from './lazy-error';

@Component({
  selector: 'defer-nested',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyErrorComponent],
  template: `
    <app-box>
      <content>🖐️ first, trigger HTTP request failure within your devtools: <em>Network</em> tab -> right-click on one of the dynamic chunks loaded -> <strong>Block request URL/domain</strong> -> and now trigger <code>&#64;defer</code></content>
    </app-box>

    @defer (on interaction) {
      <lazy-error>
        <article>
          some <code>&#64;defer (on idle)</code> content
        </article>
      </lazy-error>

    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me</strong> 👈</app-button>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong! 😭
    }
  `,
})
export class DeferErrorComponent {
}
