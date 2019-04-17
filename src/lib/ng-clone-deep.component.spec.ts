import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCloneDeepComponent } from './ng-clone-deep.component';

describe('NgCloneDeepComponent', () => {
  let component: NgCloneDeepComponent;
  let fixture: ComponentFixture<NgCloneDeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCloneDeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCloneDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
