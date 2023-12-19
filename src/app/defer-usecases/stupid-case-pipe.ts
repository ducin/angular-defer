import { Pipe, PipeTransform } from '@angular/core';
import { StUpIdCaSe } from 'stupid-case'

@Pipe({
  name: 'StUpIdCaSe',
  standalone: true
})
export class StUpIdCaSePipe implements PipeTransform {
  transform(value: string): string {
    return StUpIdCaSe(value);
  }
}
