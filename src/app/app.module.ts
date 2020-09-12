import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { HttpClientModule } from "@angular/common/http";
import { UndefinedObjectHandleComponent } from './undefined-object-handle/undefined-object-handle.component';
@NgModule({
  declarations: [
    AppComponent,
    EmplyeeComponent,
    UndefinedObjectHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
