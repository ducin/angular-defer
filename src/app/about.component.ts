import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './defer-usecases/loader';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  styles: `
  `,
  template: `
    <article>
      <ul>
        <li>Angular <code>&#64;defer</code> block allows standalone <strong>components</strong>, <strong>directives</strong> and <strong>pipes</strong> to be dynamically loaded in runtime (via separate bundles) whenever a specified contition is met.</li>
        <li>Open browser devtools <em>Network</em> tab:<ul>
          <li>to see <strong>bundles lazily loaded</strong></li>
          <li>to <strong>throttle</strong> your connection speed (see the spinner)</li>
        </ul></li>
        <li>In these examples: <ul>
          <li>All routed components are statically imported on router level</li>
          <li>Only their content is lazily loaded via <code>&#64;defer</code> block</li>
          <li>All <code>&#64;loading</code> use the following spinner: <div><loader/></div></li>
        </ul></li>
      </ul>
    </article>
  `
})
export class AboutComponent {
}
