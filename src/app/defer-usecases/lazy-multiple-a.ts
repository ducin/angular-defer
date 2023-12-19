import { Component } from '@angular/core';

@Component({
  selector: 'lazy-multiple-a',
  standalone: true,
  template: `
    <h2>lazy-multiple-a</h2>
    <ng-content></ng-content>
  `,
})
export class LazyMultipleAComponent {
}
