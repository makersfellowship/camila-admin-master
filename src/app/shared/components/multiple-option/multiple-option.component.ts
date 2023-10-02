import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

interface multipleOptionProps {
  label: string;
  active: boolean;
}
@Component({
  selector: "app-multiple-option",
  templateUrl: "./multiple-option.component.html",
  styleUrls: ["./multiple-option.component.scss"],
})
export class MultipleOptionComponent implements OnInit {
  @Input() question;
  options: multipleOptionProps[];
  @Output() answer = new EventEmitter<String>();

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
      return { label: o, active: false };
    });
  }
}
