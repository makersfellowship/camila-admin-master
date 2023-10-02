import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

type TextInputType = "text" | "email" | "url" | "box";
@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"],
})
export class TextInputComponent implements OnInit {
  @Input() label;
  @Input() type: TextInputType = "text";
  result: string;
  @Output() answer = new EventEmitter<String>();

  inputId = String(Math.floor(Math.random() * 1000) * Date.now());
  constructor() {}

  ngOnInit() {}

  public onResponse({ result }) {
    this.answer.emit(result);
  }
}
