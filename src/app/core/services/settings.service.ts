import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public events = new BehaviorSubject({});
  public surveyEvents = new BehaviorSubject({});
  constructor() {}

  public changeEvents({ title, action }) {
    this.events.next({ title, action });
  }

  public changeSurveyEvents({ view, data }) {
    this.surveyEvents.next({ view, data });
  }
}
