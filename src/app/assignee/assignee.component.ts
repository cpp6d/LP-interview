import { Component, OnInit } from '@angular/core';
import { AssigneeService } from './assignee.service';
import { AssigneePipe } from './assignee.pipe'

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {

  constructor(private assigneeService: AssigneeService) { }

  public assignee = {name:""};
  public assigneeSearch = "";
  public value = "";
  public allAssignee = [];
  public active = '';


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
      alert('You have sucessfully created a new Assignee')
    }, (err)=>{
      console.log(err)
    })
  }

  changeState(state){
    let prev = document.getElementById(this.active)
    prev.className = "";
    let curr = document.getElementById(state)
    this.active = state;
    curr.className = "active";
    this.value  = state;
  }

  ngOnInit() {
    this.active = 'default'
    let curr = document.getElementById('default')
    curr.className = "active"
    this.assigneeService.getAssignees()
    .subscribe((assignee)=>{
      this.allAssignee = assignee
    },(err)=>{
      console.log(err)
    })
  }

}
