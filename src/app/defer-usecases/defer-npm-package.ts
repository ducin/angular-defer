import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './loader';
import { BoxComponent } from '../box.component';
import { ButtonComponent } from '../button.component';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';

@Component({
  selector: 'defer-npm-package',
  standalone: true,
  imports: [FormsModule, LegacyModule, LoaderComponent, BoxComponent, ButtonComponent, StUpIdCaSePipe],
  template: `
    <app-box>
      <content>🖐️ only the <code>StUpIdCaSe</code> pipe is a deferrable here (no components). However, it's the only code which uses an external npm package, <code>stupid-case</code>.</content>
      <content>🖐️ follow these steps:<ul>
        <li>in the devtools/network, search for the last chunk loaded (the only one loaded within this defer), e.g. <pre>chunk-DHY7UALU.js</pre>It will include code which looks like this:<pre>import &#123;
  StUpIdCaSePipe
&#125; from "/chunk-BYHJVGJ4.js";
export &#123;
  StUpIdCaSePipe
&#125;;</pre>In this case, <code>DHY7UALU</code> is the chunk with the <strong>pipe</strong>, whereas <code>BYHJVGJ4</code> is the chunk with the <strong>npm package</strong>.</li>
        <li>at the top of network tab, filter requests by <code>BYHJVGJ4</code> and you'd see the content on the npm package.</li>
        <li>🤔 Now, where/when/who initiated loading it?</li>
        <li>Clear the Network request filter and filter by type: <code>Doc</code> (Document, HTML, the index.html file). Scroll to the end of HTML/HEAD where you'd find:<pre>&lt;link rel="modulepreload" href="chunk-BYHJVGJ4.js"></pre>Angular is <strong>preloading</strong> the module for later use in a <strong>non-sequential manner</strong> (faster) once the document has been created. Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload">modulepreload</a>.</li>
      </ul></content>
    </app-box>

    @defer (on interaction) {
      <h2>pipe</h2>
      {{ "Lazy loaded pipe here" | StUpIdCaSe }}
    } @placeholder (minimum 500ms) {
      <app-button>👉 <strong>interact with me</strong> 👈</app-button>
    }
  `,
})
export class DeferNPMPackageComponent {
}
