import { Routes } from '@angular/router';
import { DeferWhenConditional } from './defer-usecases/defer-when-condition';
import { AboutComponent } from './about.component';
import { DeferOnHover } from './defer-usecases/defer-on-hover';

export const routes: Routes = [{
  path: '',
  component: AboutComponent,
}, {
  path: 'defer-when-condition',
  component: DeferWhenConditional,
}, {
  path: 'defer-on-hover',
  component: DeferOnHover,
}];
