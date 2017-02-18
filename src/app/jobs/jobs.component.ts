import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private jobsService: JobsServiceService, public fb: FormBuilder) { }
  public value = "";
  public form = {name:"",summary:""}
  public updateForm = {_id:""}
  // public jobsId = ""
  public assignee_id = ""
  public job_id = ""
  public allJobs= [];
  public active = ""

  ngOnInit() {
    this.active = 'default';
    let curr = document.getElementById('default')
    curr.className = "active";
    this.jobsService.getJobs()
    .subscribe(jobs=>{
      this.allJobs = jobs
    }, (err) =>{
      console.log(err)
    })
  }

  onSubmit(){
    this.jobsService.postJobs(this.form)
      .subscribe(jobs => {
        alert('You have successfully posted a job')
      }, (err) =>{
        console.log(err)
      })
  }

  getJobs(state){
    this.value = state
    this.jobsService.getJobs()
    .subscribe(jobs=>{
      this.allJobs = jobs
    }, (err) =>{
      console.log(err)
    })
  }


// Part of the Requirements but I created a custom Pipe that would allow you to filter through the jobs and choose the one you want
  // getTask(){
  //   this.jobsService.getJob(this.jobsId)
  //   .subscribe(job =>{
  //     console.log(job)
  //   }, (err) =>{
  //       console.log(err)
  //     }
  //   )
  // }

  updateTask(){
    this.jobsService.updateJob(this.updateForm._id, this.updateForm)
    .subscribe(job =>{
      alert('You have sucessfully Updated a Job')
    }, (err)=>{
      console.log(err)
    })
  }

  assignJob(){
    this.jobsService.assignJobs(this.assignee_id,this.job_id)
      .subscribe(job =>{
        alert('You have sucessfully assigned a job')
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

  clickOnJob(job){
    this.job_id = job._id
    this.changeState('updateJob')
    console.log(job)
    this.updateForm = job
  }

}
