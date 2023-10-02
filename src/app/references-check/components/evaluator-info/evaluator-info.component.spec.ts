import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvaluatorInfoComponent } from "./evaluator-info.component";

describe("EvaluatorInfoComponent", () => {
  let component: EvaluatorInfoComponent;
  let fixture: ComponentFixture<EvaluatorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluatorInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
