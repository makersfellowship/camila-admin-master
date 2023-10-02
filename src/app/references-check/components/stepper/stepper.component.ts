import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-custom-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  @Input() step: string = "Contact information";

  @Output() selectedStep = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChangeStep({ step }) {
    // this.stepSelected = step;
    // this.selectedStep.emit(this.stepSelected);
  }
}
