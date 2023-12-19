import { Component, ElementRef, inject } from '@angular/core';
import { BoxComponent } from '../box.component';
import { LazyAccordionContentAComponent } from './lazy-accordion-content-a';
import { LazyAccordionContentBComponent } from './lazy-accordion-content-b';
import { LazyAccordionContentCComponent } from './lazy-accordion-content-c';

@Component({
  selector: 'defer-accordion',
  standalone: true,
  imports: [BoxComponent, LazyAccordionContentAComponent, LazyAccordionContentBComponent, LazyAccordionContentCComponent],
  styles: `
  .accordion {
    background-color: var(--main-background-color);
    color: var(--text-color);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
  }

  .active, .accordion:hover {
    background-color: var(--secondary-background-color);
  }

  .panel {
    padding: 0 18px;
    background-color: var(--main-background-color);
    display: none;
    overflow: hidden;
  }

  .accordion-content {
    margin: 10px;
    width: 75%;
  }
  `,
  template: `
    <app-box>
      <content>🖐️ each accordion section uses: <code>&#64;defer (on hover(accordion); on timer(5s))</code>:<ul>
        <li>when <strong>two (or more) different triggers</strong> are declared, the first one that takes place triggers actual loading</li>
        <li>accordion section could start loading on <strong>interaction</strong> (when clicked), but loading on <strong>hover</strong> is usually better, since loading will start before the user actually clicks it.</li>
      </ul></content>
    </app-box>

    <section class="accordion-content">
      <button #accordionA class="accordion" (click)="toggleVisible(0)">Section A</button>
      <div class="panel">
        @defer (on hover(accordionA); on timer(5s)){
          <lazy-accordion-content-a />
        }
      </div>
      
      <button #accordionB class="accordion" (click)="toggleVisible(1)">Section B</button>
      <div class="panel">
        @defer (on hover(accordionB); on timer(5s)){
          <lazy-accordion-content-b />
        }
      </div>
      
      <button #accordionC class="accordion" (click)="toggleVisible(2)">Section C</button>
      <div class="panel">
        @defer (on hover(accordionC); on timer(5s)){
          <lazy-accordion-content-c />
        }
      </div>
    </section>
  `,
})
export class DeferAccordionComponent {
  #elementRef = inject(ElementRef);

  #buttons = this.#elementRef.nativeElement.getElementsByClassName('accordion');
  #panels = this.#elementRef.nativeElement.getElementsByClassName('panel');

  toggleVisible(sectionIndex: number) {
    this.#buttons[sectionIndex].classList.toggle('active');
    for (const panel of this.#panels){
      panel.style.display = 'none';
    }
    this.#panels[sectionIndex].style.display = 'block';
  }
}
