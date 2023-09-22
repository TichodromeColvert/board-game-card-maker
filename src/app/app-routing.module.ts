import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IwwComponent } from './games/iww/iww.component';

const routes: Routes = [
  // Game routes
  {
    path: 'iww',
    component: IwwComponent
  },
  // Invalid requests redirected to default
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
