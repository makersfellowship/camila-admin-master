import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-single-option-response",
  templateUrl: "./single-option-response.component.html",
  styleUrls: ["./single-option-response.component.scss"],
})
export class SingleOptionResponseComponent implements OnInit {
  @Input() response;
  public options = [];

  constructor() {}

  ngOnInit() {
    this.formatResponse();
  }

  formatResponse() {
    this.options = this.response.question.options.map((o) => {
      return { description: o, selected: false };
    });
    let index = this.options.findIndex(
      (o) => o.description == this.response.result
    );
    if (index == -1) {
      this.options.push({ description: this.response.result, selected: true });
      return;
    }
    this.options[index].selected = true;
  }
}
