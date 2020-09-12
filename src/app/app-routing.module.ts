import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { UndefinedObjectHandleComponent } from './undefined-object-handle/undefined-object-handle.component';
const routes: Routes = [
  {path : '', component : EmplyeeComponent},
  {path : 'undefined-object-handle', component : UndefinedObjectHandleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
