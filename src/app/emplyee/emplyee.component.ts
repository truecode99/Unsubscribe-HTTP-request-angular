import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; // Subscription Object from rxjs
import { HttpRequestService } from '../http-request.service';
@Component({
  selector: 'app-emplyee',
  templateUrl: './emplyee.component.html',
  styleUrls: ['./emplyee.component.css']
})
export class EmplyeeComponent implements OnInit, OnDestroy {
  private empReq: Subscription; // declare empReq as Subscription type
  constructor(private httpReqSer: HttpRequestService,) { }
  employee_name: string = "";
  ngOnInit(): void {
  }

  fetchEmplyeeDetails(id) {
    if (this.empReq) {  // cancel the previous subscription
      this.empReq.unsubscribe();
    }
    this.empReq = this.httpReqSer.fetchData('http://dummy.restapiexample.com/api/v1/employee/' + id).subscribe(
      result => {
        this.employee_name = result.data.employee_name
      },
      error => {
      }
    );
  }

  ngOnDestroy(): void {
    this.empReq.unsubscribe(); // release subscription on component destroy
  }

}
