import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; // Subscription Object from rxjs
import { HttpRequestService } from '../http-request.service';
@Component({
  selector: 'app-undefined-object-handle',
  templateUrl: './undefined-object-handle.component.html',
  styleUrls: ['./undefined-object-handle.component.css']
})
export class UndefinedObjectHandleComponent implements OnInit, OnDestroy  {
  
  private empReq: Subscription; // declare empReq as Subscription type
  // emplyee: object; 
  emplyee: any; 
  constructor(private httpReqSer: HttpRequestService) { }
 
  ngOnInit(): void {
    this.empReq = this.httpReqSer.fetchData('http://dummy.restapiexample.com/api/v1/employee/1').subscribe(
      result => {
        this.emplyee = result;
      },
      error => {
      }
    );
  }


  ngOnDestroy(): void {
    this.empReq.unsubscribe(); // release subscription on component destroy
  }

}
