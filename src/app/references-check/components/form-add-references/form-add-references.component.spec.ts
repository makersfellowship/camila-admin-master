import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddReferencesComponent } from './form-add-references.component';

describe('FormAddReferencesComponent', () => {
  let component: FormAddReferencesComponent;
  let fixture: ComponentFixture<FormAddReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
