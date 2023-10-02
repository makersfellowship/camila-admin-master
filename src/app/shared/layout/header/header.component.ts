import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SettingsService } from "src/app/core/services/settings.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: any = {};
  public company: any = {};
  public title: string = "Your surveys";
  public action: string = "";

  subscribeActions$: Subscription;
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.company = JSON.parse(localStorage.getItem("currentCompany"));
    this.subscribeActions$ = this.settingsService.events.subscribe(
      (output: any) => {
        this.action = output.action;
        this.title = output.title;
      }
    );
    this.title = "Your surveys";
  }

  ngOnDestroy() {
    this.subscribeActions$.unsubscribe();
  }

  public onGoToProfile() {}

  public onChangeView() {
    switch (this.action) {
      case "dashboard":
        this.title = "Your surveys";
        this.action = "";
        this.settingsService.changeSurveyEvents({ view: "Main", data: {} });
        break;
      case "candidates":
        this.title = "";
        this.action = "dashboard";
        this.settingsService.changeSurveyEvents({ view: "Detail", data: {} });
        break;
    }
  }
}
