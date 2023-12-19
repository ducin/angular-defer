import { Component } from '@angular/core';

@Component({
  selector: 'lazy-prefetch',
  standalone: true,
  template: `
    <h2>lazy-prefetch</h2>
    <ng-content></ng-content>
  `,
})
export class LazyPrefetchComponent {
}
