import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [SharedComponent, TestComponent],
  imports: [],
  exports: [SharedComponent, TestComponent],
})
export class SharedModule {}
