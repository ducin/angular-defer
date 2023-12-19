import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LazyOnHoverComponent } from './lazy-on-hover';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'defer-on-hover',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, LazyOnHoverComponent, LazySharedComponent, StUpIdCaSePipe, HighlightDirective],
  template: `
    <app-box>
      <content>📚 <code>hover</code> triggers deferred loading when the mouse has hovered over the trigger area. Events used for this are <code>mouseenter</code> and <code>focusin</code>.</content>
    </app-box>

    @defer (on hover) {
      <lazy-on-hover>
        <article>
          some <code>&#64;defer (on hover)</code> content
        </article>
      </lazy-on-hover>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on hover)</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
          some <code>&#64;defer (on hover)</code> content
        </article>
      </non-standalone>

      <h2>pipe</h2>
      {{ "Lazy loaded pipe here" | StUpIdCaSe }}

      <h2>directive</h2>
      <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>hover me</strong> (the placeholder) to load content 👈</app-button>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }

    <div>...OR</div>

    <app-button #el>👉 <strong>hover this guy</strong> (element with a template variable) to load content 👈</app-button>
    @defer (on hover(el)) {
      <lazy-on-hover>
        <article>
          some <code>&#64;defer (on hover(el))</code> content
        </article>
      </lazy-on-hover>
      <lazy-shared>
        <article>
          some <code>&#64;defer (on hover(el))</code> content
        </article>
      </lazy-shared>
      <non-standalone>
        <article>
          some <code>&#64;defer (on hover(el))</code> content
        </article>
      </non-standalone>
    } @loading (after 100ms; minimum 1s) {
      <loader />
    } @error {
      something went wrong!
    }
  `,
})
export class DeferOnHoverComponent {
}
