import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import * as helper from "../../../core/utils/helper";

@Component({
  selector: "app-form-add-references",
  templateUrl: "./form-add-references.component.html",
  styleUrls: ["./form-add-references.component.scss"],
})
export class FormAddReferencesComponent implements OnInit {
  public submit: boolean = false;
  public regex: RegExp = /^\S+@\S+\.\S+$/;
  public regexLinkedin: RegExp =
    /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  public referenceType: any = {
    title: "Relationship to you",
    options: [
      "Peer",
      "Student peer",
      "Direct report",
      "Manager",
      "Teacher",
      "Client",
    ],
  };

  @Input() survey;
  @Output() nextStep = new EventEmitter();
  public countryCodes: any[] = helper.countries;
  public references: any[] = [];
  public mobile: boolean = false;

  //references
  constructor() {}

  ngOnInit() {
    this.onSetMinReferences();
    if (window.screen.width <= 700) {
      this.mobile = true;
    }
  }

  public onSetMinReferences() {
    for (let i = 0; i < this.survey.minNumberReferences; i++)
      this.onAddReference();
  }

  public onAddReference() {
    if (this.references.length < this.survey.maxNumberReferences)
      this.references.push({
        firstName: "",
        lastName: "",
        viewPhoneNumber: "",
        phoneNumber: "",
        email: "",
        countryCode: 1,
        linkedin: "",
        company: "",
        relation: "",
        emailValidation: true,
        position: "",
      });
  }

  public onDeleteReference() {
    if (this.references.length > this.survey.minNumberReferences)
      this.references.pop();
  }

  public onNextStep() {
    if (this.duplicatedEmails(this.references).length) {
      return alert("Please provide different email for each evaluator");
    }
    if (!this.referencesValdiate()) {
      this.submit = true;
      return alert("Please fill out the minimum number of references");
    }
    this.nextStep.emit(this.references);
  }

  public referencesValdiate() {
    let validaReferences = this.references.filter(
      (r) =>
        r.firstName != "" &&
        r.lastName != "" &&
        r.viewPhoneNumber != "" &&
        r.phoneNumber != "" &&
        r.countryCode != "" &&
        r.email != "" &&
        r.company != "" &&
        r.relation != "" &&
        r.position != "" &&
        r.linkedin != "" &&
        this.validateEmail({ email: r.email }) &&
        this.validateLinkedin(r.linkedin)
    );

    return validaReferences.length >= this.survey.minNumberReferences;
  }

  public validateEmail(reference) {
    reference.emailValidation = this.regex.test(reference.email);
    reference.email = reference.email.toLowerCase();
    return this.regex.test(reference.email);
  }

  public validateLinkedin(linkedin) {
    return this.regexLinkedin.test(linkedin);
  }

  public onValidatePhone(index) {
    this.references[index].viewPhoneNumber = helper
      .formatterNumbers(this.references[index].viewPhoneNumber)
      .replace(" ", "");
  }

  //Phone number functions

  // Extract the dial number of the country
  telInputObject(event, index) {
    this.references[index].countryCode = event["s"]["dialCode"];
  }

  // Executes when the number is correct
  setFormatNumber(index) {
    this.references[
      index
    ].phoneNumber = `${this.references[index].countryCode} ${this.references[index].viewPhoneNumber}`;
  }

  // Stablish the country dialCode and ISO for each this.references[index]
  onChangeCountry(event, index) {
    this.references[index].countryCode = event.dialCode;
    this.references[
      index
    ].phoneNumber = `${this.references[index].countryCode} ${this.references[index].viewPhoneNumber}`;
  }

  //Validate reference duplicated
  duplicatedEmails(array) {
    return array
      .map((e) => e["email"].toLowerCase())
      .map((e, i, final) => final.indexOf(e) !== i && i)
      .filter((obj) => array[obj])
      .map((e) => array[e]["email"].toLowerCase());
  }
}
