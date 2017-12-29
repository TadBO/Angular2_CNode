import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'lastReplay'
})
export class LastReplay implements PipeTransform {
  transform(value: string, exponent: string) {
    const date = new Date(value);
    const lastYear = date.getFullYear();
    const lastMonth = date.getMonth() + 1;
    const lastHours = date.getHours();
    const lastDays = date.getDate();
    const lastMins = date.getMinutes();
    const lastSecs = date.getSeconds();
    const current = new Date();
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;
    const currentDays = current.getDate();
    const currentHours = current.getHours();
    const currentMins = current.getMinutes();
    const currentSecs = current.getSeconds();
    if (currentYear - lastYear > 0) {
      return value = `${String(currentYear - lastYear)}年前`;
    }else if (currentMonth - lastMonth > 0) {
      return value = `${String(currentMonth - lastMonth)}月前`;
    }else if ( currentDays - lastDays > 0) {
      return value = `${String(currentDays - lastDays)}天前`;
    }else if (currentHours - lastHours > 0) {
      return value = `${String(currentHours - lastHours)}小时前`;
    }else if ( currentMins - lastMins > 0) {
      return value = `${String(currentMins - lastMins)}分钟前`;
    } else {
      return value = `${String(currentSecs - lastSecs)}秒前`;
    }
  }
}
