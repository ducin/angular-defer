import { Pipe, PipeTransform } from '@angular/core';

function StUpIdCaSe(str: string){
  return [...str].map((char, idx) =>
      idx % 2 == 0
      ? char.toUpperCase()
      : char.toLowerCase()
  ).join('')
}

@Pipe({
  name: 'StUpIdCaSe',
  standalone: true
})
export class StUpIdCaSePipe implements PipeTransform {
  transform(value: string): string {
    return StUpIdCaSe(value);
  }
}
