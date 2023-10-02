import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "reference-tracking",
  templateUrl: "./reference-tracking.component.html",
  styleUrls: ["./reference-tracking.component.scss"],
})
export class ReferenceTrackingComponent implements OnInit {
  @Input() references;

  constructor() {}

  ngOnInit() {}
}
