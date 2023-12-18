import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-viewport',
  standalone: true,
  template: `
    <h2>lazy-on-viewport</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnViewportComponent {
}
