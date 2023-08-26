import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IwwComponent } from './games/iww/iww.component';
import { AbsoluteValuePipe } from './pipes/absolute-value.pipe';
import { NumberSequencePipe } from './pipes/number-sequence.pipe';
import { ArrayConcatPipe } from './pipes/array-concat.pipe';

@NgModule({
  declarations: [
    AppComponent,

    // Game components
    IwwComponent,

    // Custom pipes
    AbsoluteValuePipe,
    ArrayConcatPipe,
    NumberSequencePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
