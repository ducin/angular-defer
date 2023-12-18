import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-hover',
  standalone: true,
  template: `
    <h2>lazy-on-hover</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnHoverComponent {
}
