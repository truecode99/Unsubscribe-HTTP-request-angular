import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplyeeComponent } from './emplyee/emplyee.component';

const routes: Routes = [
  {path : '', component : EmplyeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
