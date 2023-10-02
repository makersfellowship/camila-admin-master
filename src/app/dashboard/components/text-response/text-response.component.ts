import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-text-response",
  templateUrl: "./text-response.component.html",
  styleUrls: ["./text-response.component.scss"],
})
export class TextResponseComponent implements OnInit {
  @Input() response;

  constructor() {}

  ngOnInit() {}
}
