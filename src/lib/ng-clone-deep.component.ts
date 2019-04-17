import { Component } from '@angular/core';
import { NgCloneDeepService } from './ng-clone-deep.service';

@Component({
  selector: 'litwak-ng-clone-deep',
  template: `
  <div class="user">
  SOURCE:<br>
  <p *ngFor="let user of source">
    {{ user.name }}
  </p>
  <hr>
  COPY:<br>
  <p *ngFor="let user of sourceCopy">
    {{ user.name }}
  </p>
  <hr>
  Clone:<br>
  <p *ngFor="let user of sourceClone">
    {{ user.name }}
  </p>
  <hr>
  <button (click)="changeCopy()">
    Change Copy
  </button>
  <button (click)="changeClone()">
    Change Clone
  </button>
</div>
  `,
  styles: []
})
export class NgCloneDeepComponent {

  constructor(private cloneDeep: NgCloneDeepService) {}
   // Original source
   source = [{name: 'Tom'}, {name: 'Jerry'}];
   // Copy with spread operator
   sourceCopy = [...this.source];

   // Copy with spread operator
   sourceClone = this.cloneDeep.clone(this.source);

   changeCopy(){
     this.sourceCopy[0].name = 'change Garfield by Coyp';
   }

  changeClone(){
    this.sourceClone[0].name = 'change Garfield byClone';
  }

}
