import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobsPipe'
})
export class JobsPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      let target = args.toLowerCase()
      let filtered = value.filter((assignee) => {
        return assignee.summary.indexOf(target) > -1 || assignee._id.indexOf(target) > -1;
      })
      return filtered.length ? filtered : [-1]
    }
    return value
  }
}
