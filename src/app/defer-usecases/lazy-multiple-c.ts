import { Component } from '@angular/core';

@Component({
  selector: 'lazy-multiple-c',
  standalone: true,
  template: `
    <h2>lazy-multiple-c</h2>
    <ng-content></ng-content>
  `,
})
export class LazyMultipleCComponent {
}
