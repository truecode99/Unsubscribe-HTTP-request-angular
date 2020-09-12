import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndefinedObjectHandleComponent } from './undefined-object-handle.component';

describe('UndefinedObjectHandleComponent', () => {
  let component: UndefinedObjectHandleComponent;
  let fixture: ComponentFixture<UndefinedObjectHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndefinedObjectHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndefinedObjectHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
