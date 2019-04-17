import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCloneDeepComponent } from './ng-clone-deep.component';

@NgModule({
  declarations: [NgCloneDeepComponent],
  imports: [
    CommonModule
  ],
  exports: [NgCloneDeepComponent]
})
export class NgCloneDeepModule { }
