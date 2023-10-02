import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent implements OnInit {
  @Input() text;
  constructor() {}

  ngOnInit() {}
}
