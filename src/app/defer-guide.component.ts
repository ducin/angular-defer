import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-guide',
  standalone: true,
  imports: [CommonModule],
  styles: `
  `,
  template: `
    <article>
      <h3>about the <code>&#64;defer</code> block</h3>
      <ul>
        <li>Angular <code>&#64;defer</code> block allows <code>standalone: true </code> <strong>components</strong>, <strong>directives</strong> and <strong>pipes</strong> to be dynamically loaded in runtime (via separate bundles) whenever a specified contition is met.</li>
        <li>Note that if a file which exports a standalone component (or directive, pipe) also exports something else (object, function, whatever) and it gets <strong>statically imported</strong> (e.g. <code>import &#123; anotherThing &#125; from './my-component'</code>), then the file is <strong>NOT</strong> separated to its own bundle (included in the one that does the static import). This is <strong>not</strong> angular-specific, similar constraints exist in other frameworks.
      </li>
        <li>The <strong>main goal</strong> of <code>&#64;defer</code> is to enable more convenient <strong>lazy loading</strong> on template level.</li>
        <li>Expected result: improved <a href="https://web.dev/articles/optimize-lcp">LCP / Largest Contenftul Paint</a> (since there's less to download, parse, execute and eventually less to render) and potentially also improved <a href="https://web.dev/articles/fid">FID / First Input Delay</a> (since there's less JS to download and parse, there's also higher chance that less messages would get enqueued within the Event Loop) metrics.</li>
        <li>For each <strong>deferrable item</strong>, respective lazy chunk is created, which is reflected while building Angular applications:</li>
      </ul>
      <pre>
Initial Chunk Files   | Names                       |  Raw Size | Estimated Transfer Size
main-DUNTN4HI.js      | main                        | 128.61 kB |                29.60 kB
chunk-UCVFWL2T.js     | -                           | 121.49 kB |                36.67 kB
polyfills-LZBJRJJE.js | polyfills                   |  32.69 kB |                10.59 kB
chunk-WGA22VWP.js     | -                           |   7.15 kB |                 2.06 kB
styles-XFNAR5N2.css   | styles                      |   1.49 kB |               434 bytes
chunk-J2DQ2KIQ.js     | -                           | 618 bytes |               618 bytes
chunk-BMOVG5ZR.js     | -                           | 525 bytes |               525 bytes
chunk-7YNHPICR.js     | -                           | 324 bytes |               324 bytes

                      | Initial Total               | 292.86 kB |                80.78 kB

Lazy Chunk Files      | Names                       |  Raw Size | Estimated Transfer Size
chunk-UWZV5TMK.js     | lazy-loading-vs-placeholder | 462 bytes |               462 bytes
chunk-54IECANR.js     | lazy-on-interaction         | 448 bytes |               448 bytes
chunk-ZG77VKXW.js     | lazy-nested-further         | 448 bytes |               448 bytes
chunk-A4IH5UJX.js     | lazy-when-condition         | 448 bytes |               448 bytes
chunk-WK3NF435.js     | lazy-on-immediate           | 442 bytes |               442 bytes
chunk-BRJ2VQLU.js     | lazy-on-viewport            | 439 bytes |               439 bytes
chunk-DBENGBL7.js     | lazy-prefetch               | 431 bytes |               431 bytes
chunk-2B6OU5YG.js     | lazy-on-hover               | 430 bytes |               430 bytes
chunk-PYQCCFJT.js     | lazy-on-timer               | 430 bytes |               430 bytes
chunk-NRLVJS22.js     | lazy-on-idle                | 427 bytes |               427 bytes
chunk-IHWG3WLR.js     | lazy-nested                 | 425 bytes |               425 bytes
chunk-IY6SLXUD.js     | lazy-error                  | 422 bytes |               422 bytes
chunk-Q3SAMQS5.js     | button-component            |  98 bytes |                98 bytes
chunk-MHZUUBNE.js     | lazy-shared                 |  97 bytes |                97 bytes
chunk-JIGCVTKY.js     | highlight-directive         |  96 bytes |                96 bytes
chunk-KX6N7GHI.js     | stupid-case-pipe            |  92 bytes |                92 bytes

Application bundle generation complete. [2.522 seconds]
</pre>
      Recommended reads:
      <ul><li><a href="https://angularexperts.io/blog/angular-defer-lazy-loading-total-guide">Total guide to lazy loading with Angular &#64;defer</a></li></ul>
    </article>
  `
})
export class DeferGuideComponent {
}
