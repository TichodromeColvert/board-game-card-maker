import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IwwComponent } from './games/iww/iww.component';
import { AbsoluteValuePipe } from './pipes/absolute-value.pipe';
import { NumberSequencePipe } from './pipes/number-sequence.pipe';
import { ArrayConcatPipe } from './pipes/array-concat.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { IwwCostTypePipe } from './games/iww/pipes/iww.cost-type.pipe';
import { IwwOnFirstBarPipe } from './games/iww/pipes/iww.on-first-bar.pipe';
import { ToNumberPipe } from './pipes/to-number.pipe';

@NgModule({
  declarations: [
    AppComponent,

    // Game components
    IwwComponent,

    // Custom pipes
    AbsoluteValuePipe,
    ArrayConcatPipe,
    NumberSequencePipe,
    ToNumberPipe,
    // Custom pipes specific to IWW
    IwwCostTypePipe,
    IwwOnFirstBarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
