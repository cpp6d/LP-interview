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
  
  public form = {name:"",summary:""}
  public updateForm = {jobsId:""}
  public jobsId = ""
  public updateJobsId= ""
  public assignee= ""
  public jobId = ""
  public assignee_id = ""
  public job_id = ""

  ngOnInit() {
  }

  onSubmit(){
    this.jobsService.postJobs(this.form)
      .subscribe(jobs => {
        console.log(jobs)
      }, (err) =>{
        console.log(err)
      })
  }

  getJobs(){
    this.jobsService.getJobs()
    .subscribe(jobs=>{
      console.log(jobs)
    }, (err) =>{
      console.log(err)
    })
  }
  getTask(){
    this.jobsService.getJob(this.jobsId)
    .subscribe(job =>{
      console.log(job)
    }, (err) =>{
        console.log(err)
      }
    )
  }

  updateTask(){
    this.jobsService.updateJob(this.updateJobsId, this.updateTask)
    .subscribe(job =>{
      console.log(job)
    }, (err)=>{
      console.log(err)
    })
  }

  assignJob(){
    console.log('Hi')
    this.jobsService.assignJobs(this.assignee_id,this.job_id)
      .subscribe(job =>{
        console.log(job)
      }, (err)=>{
        console.log(err)
      })
  }

}
