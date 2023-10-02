import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import * as helper from "../../../core/utils/helper";
import parsePhoneNumber from "libphonenumber-js";
@Component({
  selector: "app-evaluator-info",
  templateUrl: "./evaluator-info.component.html",
  styleUrls: ["./evaluator-info.component.scss"],
})
export class EvaluatorInfoComponent implements OnInit {
  public submit: boolean = false;
  public regex: RegExp = /^\S+@\S+\.\S+$/;
  public regexLinkedin: RegExp =
    /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  @Input() evaluator: any = {
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    viewPhoneNumber: "",
    email: "",
    emailValidation: true,
    numberValidation: true,
    linkedin: "",
  };
  @Output() nextStep = new EventEmitter();
  public countryCodes: any[] = helper.countries.sort((a, b) =>
    a.code > b.code ? 1 : -1
  );

  // Phone related variables
  countryCode = "";
  countryISOSelect = "";
  phoneValidations: boolean[] = [true];
  enableSendReferences = true;
  //

  constructor() {}

  ngOnInit() {}

  public onNextStep() {
    if (
      this.evaluator.firstName != "" &&
      this.evaluator.lastName != "" &&
      this.evaluator.countryCode != "" &&
      this.evaluator.viewPhoneNumber != "" &&
      this.evaluator.phoneNumber != "" &&
      this.evaluator.email != "" &&
      this.evaluator.relation != "" &&
      this.evaluator.position != "" &&
      this.evaluator.linkedin != "" &&
      this.validateLinkedin() &&
      this.evaluator.numberValidation &&
      this.evaluator.emailValidation
    )
      this.nextStep.emit(this.evaluator);
    else {
      this.submit = true;
      alert("Please fill out all fields");
    }
  }

  public validateEmail() {
    this.evaluator.emailValidation = this.regex.test(this.evaluator.email);
  }

  public validateLinkedin() {
    return this.regexLinkedin.test(this.evaluator.linkedin);
  }

  public onValidatePhone() {
    this.evaluator.viewPhoneNumber = helper
      .formatterNumbers(this.evaluator.viewPhoneNumber)
      .replace(" ", "");
  }

  //Phone number functions

  // Extract the dial number of the country
  telInputObject(event) {
    this.evaluator.countryCode = event["s"]["dialCode"];
  }

  // Executes when the number is correct
  setFormatNumber() {
    this.evaluator.phoneNumber = `${this.evaluator.countryCode} ${this.evaluator.viewPhoneNumber}`;
  }

  // Stablish the country dialCode and ISO for each reference
  onChangeCountry(event) {
    this.evaluator.countryCode = event.dialCode;
    this.evaluator.phoneNumber = `${this.evaluator.countryCode} ${this.evaluator.viewPhoneNumber}`;
  }

  public onOpenLinkedinUrl() {
    const URL = `https://www.linkedin.com/help/linkedin/answer/a522735/find-your-linkedin-public-profile-url?lang=en`;
    window.open(URL, "_blank");
  }
}
