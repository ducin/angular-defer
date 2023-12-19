import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LazyMultipleAComponent } from './lazy-multiple-a';
import { LazyMultipleBComponent } from './lazy-multiple-b';
import { LazyMultipleCComponent } from './lazy-multiple-c';
import { LegacyModule } from './legacy/legacy.module';

@Component({
  selector: 'defer-multiple',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyMultipleAComponent, LazyMultipleBComponent, LazyMultipleCComponent],
  template: `
    <app-box>
      <content>📚 When you have multiple deferrable components (or directives, pipes) in a <code>&#64;defer</code> block, their chunks would be loaded simultaneously</content>
      <content>🖐️ Actually, many examples on this site embed multiple deferrable items 😉</content>
    </app-box>

    @defer (on interaction) {
      <lazy-multiple-a>
        <article>
          some content
        </article>
      </lazy-multiple-a>
      <lazy-multiple-b>
        <article>
          some content
        </article>
      </lazy-multiple-b>
      <lazy-multiple-c>
        <article>
          some content
        </article>
      </lazy-multiple-c>
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me</strong> 👈</app-button>
    }
  `,
})
export class DeferMultipleComponent {
}
