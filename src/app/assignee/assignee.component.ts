import { Component, OnInit } from '@angular/core';
import { AssigneeService } from './assignee.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {

  constructor(private assigneeService: AssigneeService) { }

  public assignee = {name:""};
  public assigneeSearch = "";

  getAssignees(){
    this.assigneeService.getAssignees()
    .subscribe((assignee)=>{
      console.log(assignee)
    },(err)=>{
      console.log(err)
    })
  }
    getAssignee(){
    this.assigneeService.getAssignee(this.assigneeSearch)
    .subscribe((assignee)=>{
      console.log(assignee)
    },(err)=>{
      console.log(err)
    })
  }

  assigneeSubmit(){
    this.assigneeService.postAssignee(this.assignee)
    .subscribe((newAssignee)=>{
      console.log(newAssignee)
    }, (err)=>{
      console.log(err)
    })
  }


  ngOnInit() {
  }

}
