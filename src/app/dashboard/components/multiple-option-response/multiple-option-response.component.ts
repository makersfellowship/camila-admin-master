import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-multiple-option-response",
  templateUrl: "./multiple-option-response.component.html",
  styleUrls: ["./multiple-option-response.component.scss"],
})
export class MultipleOptionResponseComponent implements OnInit {
  @Input() response;
  public options = [];
  constructor() {}

  ngOnInit() {
    this.options = JSON.parse(this.response.result);
  }
}
