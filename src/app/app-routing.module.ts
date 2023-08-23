import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IwwComponent } from './iww/iww.component';

const routes: Routes = [{
  path: 'iww'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
