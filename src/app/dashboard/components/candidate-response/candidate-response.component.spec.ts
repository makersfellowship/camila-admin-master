import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CandidateResponseComponent } from "./candidate-response.component";

describe("CandidateResponseComponent", () => {
  let component: CandidateResponseComponent;
  let fixture: ComponentFixture<CandidateResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateResponseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
