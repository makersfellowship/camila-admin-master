import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-survey-response",
  templateUrl: "./survey-response.component.html",
  styleUrls: ["./survey-response.component.scss"],
})
export class SurveyResponseComponent implements OnInit {
  public menu: string = "Response"; //Response, References
  @Input() response;

  public candidate: any = {};
  public candidateResponses: any = [];
  public references: any = [];

  constructor() {}

  ngOnInit() {
    this.segmentData();
  }

  public onChangeMenu({ option }) {
    this.menu = option;
  }

  public segmentData() {
    this.candidate = this.response.survey.candidate;
    this.references = this.response.evaluators;
    this.candidateResponses = this.response.responses;
  }

  public onOpenReport() {
    // const URL = `localhost:4200/report?id=${this.response["survey"]["_id"]}`;
    const URL = `https://www.camila.build/report?id=${this.response["survey"]["_id"]}`;
    window.open(URL, "_blank");
  }
}
