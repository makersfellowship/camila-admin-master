import { Component, Input, OnInit } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-reference-response",
  templateUrl: "./reference-response.component.html",
  styleUrls: ["./reference-response.component.scss"],
})
export class ReferenceResponseComponent implements OnInit {
  readonly API_SURVEY: string = "api/survey";
  @Input() references;
  public responses: any[] = [];
  public referenceShowResponses: string = "";
  constructor(private mainService: MainService) {}

  ngOnInit() {}

  public onSeeResponse({ reference }) {
    if (this.referenceShowResponses == reference._id) {
      this.referenceShowResponses = "";
      this.responses = [];
      return;
    }
    this.responses = reference.responses.filter((r) =>
      this.filterResponse({ response: r })
    );
    this.referenceShowResponses = reference._id;
  }

  public filterResponse({ response }) {
    return (
      response.question.subType != "firstName" &&
      response.question.subType != "lastName" &&
      response.question.subType != "email" &&
      response.question.subType != "phoneNumber" &&
      response.question.subType != "url" &&
      response.result != "" &&
      response.result != "[]"
    );
  }

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
