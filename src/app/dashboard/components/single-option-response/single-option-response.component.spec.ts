import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOptionResponseComponent } from './single-option-response.component';

describe('SingleOptionResponseComponent', () => {
  let component: SingleOptionResponseComponent;
  let fixture: ComponentFixture<SingleOptionResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOptionResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOptionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
