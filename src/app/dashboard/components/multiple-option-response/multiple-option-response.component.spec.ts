import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOptionResponseComponent } from './multiple-option-response.component';

describe('MultipleOptionResponseComponent', () => {
  let component: MultipleOptionResponseComponent;
  let fixture: ComponentFixture<MultipleOptionResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleOptionResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOptionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
