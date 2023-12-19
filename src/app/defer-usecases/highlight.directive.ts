import { Directive, ElementRef } from '@angular/core';

const getCSSVar = (name: string) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(name)

@Directive({
  standalone: true,
  selector: '[highlight]'
})
export class HighlightDirective {

  // colors = ['red', 'blue', 'green', 'yellow'];
  colors = ['--orange-red', '--vivid-pink', '--electric-violet'].map(getCSSVar);

  constructor(el: ElementRef) {
    this.changeColor(el);
  }

  changeColor(el: ElementRef) {
    el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    setInterval(() => {
      el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }, 500);
  }
}
