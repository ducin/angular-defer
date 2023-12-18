import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-interaction',
  standalone: true,
  template: `
    <h2>lazy-on-interaction</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnInteractionComponent {
}
