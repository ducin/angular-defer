import { Component } from '@angular/core';

@Component({
  selector: 'lazy-error',
  standalone: true,
  template: `
    <h2>lazy-error</h2>
    <ng-content></ng-content>
  `,
})
export class LazyErrorComponent {
}
