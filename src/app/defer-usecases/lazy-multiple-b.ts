import { Component } from '@angular/core';

@Component({
  selector: 'lazy-multiple-b',
  standalone: true,
  template: `
    <h2>lazy-multiple-b</h2>
    <ng-content></ng-content>
  `,
})
export class LazyMultipleBComponent {
}
