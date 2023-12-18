import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-idle',
  standalone: true,
  template: `
    <h2>lazy-on-idle</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnIdleComponent {
}
