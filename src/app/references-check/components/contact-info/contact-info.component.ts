import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as helper from "../../../core/utils/helper";
import parsePhoneNumber from "libphonenumber-js";
@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  public submit: boolean = false;
  public regex: RegExp = /^\S+@\S+\.\S+$/;
  public regexLinkedin: RegExp =
    /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  public candidate: any = {
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
      this.candidate.firstName != "" &&
      this.candidate.lastName != "" &&
      this.candidate.countryCode != "" &&
      this.candidate.viewPhoneNumber != "" &&
      this.candidate.phoneNumber != "" &&
      this.candidate.email != "" &&
      this.candidate.relation != "" &&
      this.candidate.position != "" &&
      this.candidate.linkedin != "" &&
      this.validateLinkedin() &&
      this.candidate.numberValidation &&
      this.candidate.emailValidation
    )
      this.nextStep.emit(this.candidate);
    else {
      this.submit = true;
      alert("Please fill out all fields");
    }
  }

  public validateEmail() {
    this.candidate.emailValidation = this.regex.test(this.candidate.email);
    this.candidate.email = this.candidate.email.toLowerCase();
  }

  public validateLinkedin() {
    return this.regexLinkedin.test(this.candidate.linkedin);
  }

  public onValidatePhone() {
    this.candidate.viewPhoneNumber = helper
      .formatterNumbers(this.candidate.viewPhoneNumber)
      .replace(" ", "");
  }

  //Phone number functions

  // Extract the dial number of the country
  telInputObject(event) {
    this.candidate.countryCode = event["s"]["dialCode"];
  }

  // Executes when the number is correct
  setFormatNumber() {
    this.candidate.phoneNumber = `${this.candidate.countryCode} ${this.candidate.viewPhoneNumber}`;
  }

  // Stablish the country dialCode and ISO for each reference
  onChangeCountry(event) {
    this.candidate.countryCode = event.dialCode;
    this.candidate.phoneNumber = `${this.candidate.countryCode} ${this.candidate.viewPhoneNumber}`;
  }

  public onOpenLinkedinUrl() {
    const URL = `https://www.linkedin.com/help/linkedin/answer/a522735/find-your-linkedin-public-profile-url?lang=en`;
    window.open(URL, "_blank");
  }
}
