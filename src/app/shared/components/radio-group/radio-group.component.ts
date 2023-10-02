import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
@Component({
  selector: "app-radio-group",
  templateUrl: "./radio-group.component.html",
  styleUrls: ["./radio-group.component.scss"],
})
export class RadioGroupComponent implements OnInit {
  @Input() question;
  @Output() answer = new EventEmitter<String>();
  formName = String(Math.floor(Math.random() * 1000) * Date.now());

  constructor() {}

  ngOnInit() {}

  public onSelect({ option }) {
    this.answer.emit(option);
  }
}
