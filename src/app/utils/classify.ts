import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'classify'
})
export class Classify implements PipeTransform {
  transform(value: string, exponent: string) {
    switch (value) {
      case 'share' :
        return  value = '分享';
      case 'ask' :
        return  value = '问答';
      case 'job' :
        return  value = '招聘';
      case 'goood' :
        return  value = '精华';
    }
  }
}
