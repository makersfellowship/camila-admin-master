import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-custom-stepper-reference",
  templateUrl: "./stepper-reference.component.html",
  styleUrls: ["./stepper-reference.component.scss"],
})
//TODO DELETE THIS
export class StepperReferenceComponent implements OnInit {
  @Input() step: string = "Your contact info";

  @Output() selectedStep = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChangeStep({ step }) {
    // this.stepSelected = step;
    // this.selectedStep.emit(this.stepSelected);
  }
}
