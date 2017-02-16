import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class JobsServiceService {

  constructor(private http:Http) {}
  
  getJobs(): Observable<any> {
    return this.http.get('http://interview.lenderprice.com:7070/api/jobs')
      .map((response: Response) => {
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }

   postJobs(form): Observable<any> {
     return this.http.post('http://interview.lenderprice.com:7070/api/jobs',form)
      .map((response: Response)=>{
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }

   getJob(id): Observable<any> {
    return this.http.get(`http://interview.lenderprice.com:7070/api/jobs/${id}`)
      .map((response: Response) => {
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }
   
   
   //This should be a Put Request
    updateJob(id,updatedForm): Observable<any> {
     return this.http.post(`http://interview.lenderprice.com:7070/api/jobs/${id}`,updatedForm)
      .map((response: Response)=>{
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }


}
