import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
@Component({
  selector: 'app-emplyee',
  templateUrl: './emplyee.component.html',
  styleUrls: ['./emplyee.component.css']
})
export class EmplyeeComponent implements OnInit {
  private empReq: Subscription;
  constructor( private httpReqSer: HttpRequestService,) { }
  employee_name:string = "";
  ngOnInit(): void {
  }

  fetchEmplyeeDetails(id){
    if (this.empReq) {  // cancel previous http request
      this.empReq.unsubscribe();
    }
    this.empReq = this.httpReqSer.fetchData('http://dummy.restapiexample.com/api/v1/employee/'+id).subscribe(
      result => {
         this.employee_name = result.data.employee_name
      },
      error => {
      }
    );
  }

}
