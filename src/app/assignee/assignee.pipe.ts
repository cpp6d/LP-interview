import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignee'
})
export class AssigneePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      let target = args.toLowerCase()
      let filtered = value.filter((assignee) => {
        return assignee.name.indexOf(target) > -1 || assignee._id.indexOf(target) > -1;
      })
      return filtered.length ? filtered : [-1]
    }
    return value
  }

}
