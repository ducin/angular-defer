import { Component } from '@angular/core';

@Component({
  selector: 'lazy-nested-further',
  standalone: true,
  template: `
    <h2>lazy-nested-further</h2>
    <ng-content></ng-content>
  `,
})
export class LazyNestedFurtherComponent {
}
