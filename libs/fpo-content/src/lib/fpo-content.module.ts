import { NgModule } from '@angular/core';
import { FpoContentComponent } from './fpo-content.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FpoContentComponent, HomeComponent],
  imports: [BrowserModule],
  exports: [FpoContentComponent, HomeComponent],
})
export class FpoContentModule {}
