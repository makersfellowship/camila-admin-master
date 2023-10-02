import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-response-detail",
  templateUrl: "./response-detail.component.html",
  styleUrls: ["./response-detail.component.scss"],
})
export class ResponseDetailComponent implements OnInit {
  @Input() responses;

  constructor() {}

  ngOnInit() {}
}
