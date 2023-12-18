import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-immediate',
  standalone: true,
  template: `
    <h2>lazy-on-immediate</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnImmediateComponent {
}
