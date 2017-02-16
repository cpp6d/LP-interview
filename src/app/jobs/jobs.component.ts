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

}
