import { Component } from '@angular/core';

@Component({
  selector: 'non-standalone',
  template: `
    <h2>non-standalone</h2>
    <content><em>this component is <strong>NOT</strong> standalone</em></content>
    <ng-content></ng-content>
  `,
})
export class NonStandaloneComponent {
}
