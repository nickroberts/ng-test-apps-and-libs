import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FpoContentModule } from 'fpo-content';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FpoContentModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
