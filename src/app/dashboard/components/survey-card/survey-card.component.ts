import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "app-survey-card",
  templateUrl: "./survey-card.component.html",
  styleUrls: ["./survey-card.component.scss"],
})
export class SurveyCardComponent implements OnInit {
  @Input() survey;

  constructor() {}

  ngOnInit() {
    this.survey.publish = moment().diff(moment(this.survey.createdAt), "d");
  }
}
