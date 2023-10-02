import { Component, Input, OnInit } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-candidate-response",
  templateUrl: "./candidate-response.component.html",
  styleUrls: ["./candidate-response.component.scss"],
})
export class CandidateResponseComponent implements OnInit {
  readonly API_SURVEY: string = "api/survey";
  @Input() candidate;
  @Input() references;

  constructor(private mainService: MainService) {}

  ngOnInit() {}

  public sendReminder(reference) {
    this.mainService
      .post({
        api: `${this.API_SURVEY}/send-one-reminder`,
        data: { reference_id: reference._id },
      })
      .subscribe(async (response) => {
        if (response["success"]) return alert("Reminder sent successfully.");
        if (!response["success"]) return alert("Server error try again later.");
      });
  }
}
