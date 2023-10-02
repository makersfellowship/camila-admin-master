import { Component, Input, OnInit } from "@angular/core";
import { SettingsService } from "src/app/core/services/settings.service";

@Component({
  selector: "app-survey-detail",
  templateUrl: "./survey-detail.component.html",
  styleUrls: ["./survey-detail.component.scss"],
})
export class SurveyDetailComponent implements OnInit {
  @Input() responses;
  @Input() surveyTemplate;
  constructor(private settingsService: SettingsService) {}

  ngOnInit() {}

  public onViewResponse({ surveyId }) {
    this.settingsService.changeSurveyEvents({
      view: "Response",
      data: { surveyId },
    });
  }
}
