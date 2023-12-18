import { Component } from '@angular/core';

@Component({
  selector: 'lazy-when-condition',
  standalone: true,
  template: `
    <h1>lazy-when-condition</h1>
    <ng-content></ng-content>
  `,
})
export class LazyWhenConditionComponent {
}
