import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AssigneeService {

  constructor(private http:Http) {}

  public assigneeSearch = "";

  getAssignees(): Observable<any> {
    return this.http.get('http://interview.lenderprice.com:7070/api/assignee')
      .map((response: Response) => {
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }

   postAssignee(assignee): Observable<any> {
     return this.http.post('http://interview.lenderprice.com:7070/api/assignee',assignee)
      .map((response: Response)=>{
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }

   getAssignee(id): Observable<any> {
    return this.http.get(`http://interview.lenderprice.com:7070/api/assignee/${id}`)
      .map((response: Response) => {
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }
   
   
   //This should be a Put Request
    updateAssigne(id,updatedAssignee): Observable<any> {
     return this.http.post(`http://interview.lenderprice.com:7070/api/assigne/${id}`,updatedAssignee)
      .map((response: Response)=>{
        return response.json()
      })
      .catch((err: Response) => {
        return Observable.throw(err.json() || 'Server error')
      })
   }

}
