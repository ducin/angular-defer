import { Component } from '@angular/core';

@Component({
  selector: 'lazy-loading-vs-placeholder',
  standalone: true,
  template: `
    <h2>lazy-loading-vs-placeholder</h2>
    <ng-content></ng-content>
  `,
})
export class LazyLoadingVsPlaceholder {
}
