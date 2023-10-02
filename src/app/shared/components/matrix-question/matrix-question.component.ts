import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-matrix-question",
  templateUrl: "./matrix-question.component.html",
  styleUrls: ["./matrix-question.component.scss"],
})
export class MatrixQuestionComponent implements OnInit {
  @Input() question;
  options: any[];
  @Output() answer = new EventEmitter();
  formName = String(Math.floor(Math.random() * 1000) * Date.now());

  constructor() {}

  ngOnInit() {
    this.formatArray({ options: this.question.options });
  }

  countNumberOfActiveElements() {
    const activeElements = this.options.filter((element) => element.active);
    return activeElements.length;
  }

  updateActiveState(index: number) {
    const activeElements = this.countNumberOfActiveElements();
    const element = this.options[index];
    if (element.active) {
      this.options[index] = {
        ...element,
        active: !element.active,
      };
    } else if (activeElements < this.question.maxNumberSelected) {
      this.options[index] = {
        ...element,
        active: !element.active,
      };
    }
    let filter = this.options.filter((element) => element.active);
    let map = filter.map((element) => element.label);
    this.answer.emit(JSON.stringify(map));
  }

  public formatArray({ options }) {
    this.options = options.map((o) => {
      return {
        description: o,
        value: "",
      };
    });
  }

  public onSelect({ index, value }) {
    this.options[index]["value"] = value;
    this.answer.emit(JSON.stringify(this.options));
  }
}
