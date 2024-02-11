import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObjectOrArray',
  standalone: true,
})
export class IsObjectOrArrayPipe implements PipeTransform {
  transform(value: unknown): boolean {
    return typeof value === 'object' || Array.isArray(value) ;
  }
}
