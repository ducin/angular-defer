import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-hover',
  standalone: true,
  template: `
    <h1>lazy-on-hover</h1>
    <ng-content></ng-content>
  `,
})
export class LazyOnHoverComponent {
}
