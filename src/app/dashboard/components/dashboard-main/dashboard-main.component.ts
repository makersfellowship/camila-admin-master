import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MainService } from "src/app/core/services/main.service";
import { ModalService } from "src/app/core/services/modal.service";
import { SettingsService } from "src/app/core/services/settings.service";

@Component({
  selector: "app-dashboard-main",
  templateUrl: "./dashboard-main.component.html",
  styleUrls: ["./dashboard-main.component.scss"],
})
export class DashboardMainComponent implements OnInit {
  readonly API_SURVEY_TEMPLATE: string = "api/survey-template";
  readonly API_SURVEY: string = "api/survey";

  /** */
  public loading = true;
  public currentCompany: any = {};
  public view: string = "Main"; //Main, Detail, Response
  // Array of survey in company
  public surveys: any = [];
  // Responses in one survey
  public responses: any = [];
  //
  public responseDetail: any = {};

  //Survey template
  public survey_template: any = {};
  subscribeEvents$: Subscription;

  constructor(
    private mainService: MainService,
    private modalService: ModalService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.currentCompany = JSON.parse(
      localStorage.getItem("currentCompany") || "{}"
    );
    this.loadData({ companyId: this.currentCompany._id });
    this.moduleEvents();
  }

  public moduleEvents() {
    this.subscribeEvents$ = this.settingsService.surveyEvents.subscribe(
      (output: any) => {
        switch (output.view) {
          case "Main":
            this.view = "Main";
            break;
          case "Detail":
            this.view = "Detail";
            break;
          case "Response":
            this.surveyResponseDetail({ surveyId: output.data.surveyId });
            break;
          default:
            this.view = "Main";
            break;
        }
      }
    );
  }

  public loadData({ companyId }) {
    this.mainService
      .get({
        api: `${this.API_SURVEY_TEMPLATE}/company/${companyId}`,
      })
      .subscribe(
        (surveys) => {
          this.surveys = surveys;
          this.loading = false;
        },
        (err) => {
          console.error(err);
          this.loading = false;
        }
      );
  }

  public onDetailSurvey({ templateId }) {
    this.mainService
      .get({ api: `${this.API_SURVEY}/template/${templateId}` })
      .subscribe(async (response) => {
        this.survey_template = response["survey_template"];
        this.responses = response["responses"];
        this.view = "Detail";
        this.settingsService.changeEvents({ title: "", action: "dashboard" });
      });
  }

  public surveyResponseDetail({ surveyId }) {
    this.mainService
      .get({ api: `${this.API_SURVEY}/detail/${surveyId}` })
      .subscribe(async (response) => {
        this.view = "Response";
        this.responseDetail = response;
        this.settingsService.changeEvents({ title: "", action: "candidates" });
      });
  }
}
