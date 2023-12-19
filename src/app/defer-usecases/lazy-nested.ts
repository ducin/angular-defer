import { Component } from '@angular/core';

@Component({
  selector: 'lazy-nested',
  standalone: true,
  template: `
    <h2>lazy-nested</h2>
    <ng-content></ng-content>
  `,
})
export class LazyNestedComponent {
}
