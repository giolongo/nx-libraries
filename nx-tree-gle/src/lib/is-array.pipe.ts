import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isArray',
  standalone: true
})
export class IsArrayPipe implements PipeTransform {

  transform(value: unknown): boolean {
    return Array.isArray(value);
  }

}
