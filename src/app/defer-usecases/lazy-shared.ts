import { Component } from '@angular/core';

@Component({
  selector: 'lazy-shared',
  standalone: true,
  template: `
    <h2>lazy-shared</h2>
    <content><em>this component is <strong>shared</strong> across multiple routes</em></content>
    <ng-content></ng-content>
  `,
})
export class LazySharedComponent {
}
