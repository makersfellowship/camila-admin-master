import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-form-questions-reference",
  templateUrl: "./form-questions-reference.component.html",
  styleUrls: ["./form-questions-reference.component.scss"],
})
//TODO DELETE THIS
export class FormQuestionsReferenceComponent implements OnInit {
  @Input() questions: any = [];
  @Output() nextStep = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onNextStep() {
    if (this.validateQuestions()) {
      this.nextStep.emit(this.questions);
    } else alert("Please fill out all questions");
  }

  public validateQuestions() {
    let validQuestions = this.questions.filter((q) => {
      if (q.questionType == "text" || q.questionType == "single-option") {
        return q.response && q.response != "";
      } else if (q.questionType == "multiple-option") {
        return this.validateMutipleOption({ question: q });
      } else if (q.questionType == "matrix") {
        return this.validateMatrix({ question: q });
      }
    });
    return validQuestions.length == this.questions.length;
  }

  public validateMatrix({ question }) {
    let response = JSON.parse(question.response || "[]");
    if (!Array.isArray(response)) return false;
    let validAnswers = response.filter((r) => r.value != "");
    return validAnswers.length == question.options.length;
  }

  public validateMutipleOption({ question }) {
    let response = JSON.parse(question.response || "[]");
    return (
      response &&
      Array.isArray(response) &&
      response.length >= question.minNumberSelected
    );
  }

  public assignResponse({ response, index }) {
    this.questions[index]["response"] = response;
  }
}
