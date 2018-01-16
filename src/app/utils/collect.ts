import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'collect'
})
export class Collect implements PipeTransform {
  transform(value: string, exponent: string) {
    if ( value ) {
      return '取消收藏';
    } else {
      return '收藏';
    }
  }
}
