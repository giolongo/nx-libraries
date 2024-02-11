import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObject',
  standalone: true
})
export class IsObjectPipe implements PipeTransform {

  transform(value: unknown): boolean {
    return  typeof value === 'object';
  }

}
