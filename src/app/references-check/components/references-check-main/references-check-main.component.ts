import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-references-check-main",
  templateUrl: "./references-check-main.component.html",
  styleUrls: ["./references-check-main.component.scss"],
})
export class ReferencesCheckMainComponent implements OnInit {
  //Enpoints
  readonly API_QUESTION: string = "api/question";
  readonly API_CANDIDATE_RESPONSE: string =
    "api/survey/register-references-check";
  readonly API_CREATE_RESPONSE_EVALUATOR = "api/survey/register-evaluator-v2";
  readonly API_CONFIRM_REFERENCE_INFORMATION =
    "api/reference/confirm-information";

  view: string = "Contact information"; //Contact information, Your references
  submit = false;
  public loading = false;
  public customLoadingTemplate = {};
  //Vars to set the form
  surveyId;
  evaluatorEmail;
  candidateEncodeId;
  formId;
  //Configs in the form
  public surveyConfig: any = {
    maxNumberReferences: 4,
    minNumberReferences: 1,
  };
  public questions: any = [];

  public candidate: any = {};
  public evaluator: any = {};
  public references: any = [];

  public trackReferenceLink: String = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      this.surveyId = params["survey"];
      this.evaluatorEmail = params["evaluator"];
      this.candidateEncodeId = params["candidate"];
      this.formId = params["frm"];
      if (!(this.formId || this.evaluatorEmail || this.surveyId)) {
        this.router.navigate(["/"]);
        return;
      }
      this.validateUser();
    });
  }

  public validateUser() {
    if (this.formId) {
      this.getQuestionsCandidate({
        api: `api/question/survey-template/encode/${this.formId}`,
      });
      return;
    }
    if (this.surveyId && this.evaluatorEmail) {
      this.view = "Evaluator information";
      this.getQuestionsEvaluator({
        api: `api/survey/encode/survey/${this.surveyId}/evaluator/${this.evaluatorEmail}`,
      });
      return;
    }
    if (this.candidateEncodeId) {
      this.view = "";
      this.getReferenceTracking({
        api: `api/survey/encode/survey/${this.surveyId}/candidate-v2/${this.candidateEncodeId}`,
      });
      //TODO display a error screen, something like: 'this link doesn't exist and button to return a lading page'
      //TODO CREATE A landing page
      return;
    } else {
      // TODO create modals
      alert("Error 404: Page not found.");
      // this.modalService.openModal({
      //   modal: "Error",
      //   data: { msg: err?.error?.msg || "server error" },
      // });
      this.loading = false;
      this.router.navigate(["/"]);
    }
  }

  //Get questions
  getQuestionsCandidate({ api }) {
    this.mainService.get({ api }).subscribe(
      (response) => {
        // survey maximum && minimum or default value
        this.surveyConfig = response["surveyTemplate"];
        this.questions = response["questions"].filter((q) => !q.subType);
        this.loading = false;
      },
      (err) => {
        console.error(err);
        // TODO create modals
        alert("server error, please try later");
        // this.modalService.openModal({
        //   modal: "Error",
        //   data: { msg: err?.error?.msg || "server error" },
        // });
        this.loading = false;
        this.router.navigate(["/"]);
      }
    );
  }

  getQuestionsEvaluator({ api }) {
    this.mainService.get({ api }).subscribe(
      (response) => {
        this.surveyConfig = response["surveyTemplate"];
        this.evaluator = response["evaluator"];
        this.questions = response["questions"].filter((q) => !q.subType);
        this.loading = false;
      },
      (err) => {
        console.error(err);
        alert("server error, please try later");
        // TODO create modals
        // this.modalService.openModal({
        //   modal: "Error",
        //   data: { msg: err?.error?.msg || "server error" },
        // });
        this.loading = false;
        this.router.navigate(["/"]);
      }
    );
  }

  //POST Candidate
  onSubmitSurveyCandidate() {
    this.loading = true;
    this.mainService
      .post({
        api: this.API_CANDIDATE_RESPONSE, //define well the endpoint
        data: {
          user: this.candidate,
          responses: this.questions,
          evaluators: this.references,
          surveyTemplate: this.surveyConfig["_id"],
          company: this.surveyConfig["company"]["_id"],
        },
      })
      .subscribe(
        (res) => {
          this.loading = false;
          this.trackReferenceLink = `https://${res["trackReferenceLink"]}`;
          this.submit = true;
        },
        (err) => {
          this.loading = false;
          console.error(err);
          alert("server error, please try later");
        }
      );
  }

  onSubmitSurveyEvaluator() {
    this.loading = true;
    this.mainService
      .post({
        api: this.API_CREATE_RESPONSE_EVALUATOR,
        data: {
          survey: this.surveyId,
          evaluatorEmail: this.evaluatorEmail,
          evaluator: this.evaluator,
          responses: this.questions,
        },
      })
      .subscribe(
        (res) => {
          this.loading = false;
          this.submit = true;
        },
        (err) => {
          this.loading = false;
          console.error(err);
          alert("server error, please try later");
        }
      );
  }

  public getReferenceTracking({ api }) {
    this.mainService.get({ api }).subscribe(
      (response) => {
        this.surveyConfig = response["surveyTemplate"];
        this.references = response["references"];
        this.loading = false;
      },
      (err) => {
        console.error(err);
        alert("server error, please try later");
        // TODO create modals
        // this.modalService.openModal({
        //   modal: "Error",
        //   data: { msg: err?.error?.msg || "server error" },
        // });
        this.loading = false;
        this.router.navigate(["/"]);
      }
    );
  }

  public onConfirmEvaluatorInformatio() {
    this.loading = true;
    this.mainService
      .post({
        api: this.API_CONFIRM_REFERENCE_INFORMATION,
        data: this.evaluator,
      })
      .subscribe(
        (response) => {
          this.loading = false;
          this.view = "Candidate information";
        },
        (err) => {
          console.error(err);
          alert("server error, please try later");
          // TODO create modals
          // this.modalService.openModal({
          //   modal: "Error",
          //   data: { msg: err?.error?.msg || "server error" },
          // });
          this.loading = false;
        }
      );
  }
}
