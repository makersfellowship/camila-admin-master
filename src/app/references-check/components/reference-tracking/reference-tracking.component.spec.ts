import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTrackingComponent } from './reference-tracking.component';

describe('ReferenceTrackingComponent', () => {
  let component: ReferenceTrackingComponent;
  let fixture: ComponentFixture<ReferenceTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
