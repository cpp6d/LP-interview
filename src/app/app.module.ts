import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { JobsServiceService } from './jobs/jobs-service.service';
import { AssigneeService } from './assignee/assignee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AssigneePipe } from './assignee/assignee.pipe';
import { JobsPipePipe } from './jobs/jobs-pipe.pipe';

const appRoutes: Routes = [
  {path: 'assignee', component: AssigneeComponent },
  {path: 'jobs' , component: JobsComponent},
  {path: '**', redirectTo: '/jobs'}
]

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    AssigneeComponent,
    AssigneePipe,
    JobsPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobsServiceService,AssigneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
