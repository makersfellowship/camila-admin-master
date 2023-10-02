import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-main",
  templateUrl: "./auth-main.component.html",
  styleUrls: ["./auth-main.component.scss"],
})
export class AuthMainComponent implements OnInit {
  public view: string = "Login"; //Login, Template
  public modalDisplay: string = "Hide"; // Hide, Success, Error
  public successMessage;
  public errorMessage;

  constructor(private router: Router) {}

  ngOnInit() {}

  public changeView(view) {
    if (view == "Dashboard") this.router.navigate(["/dashboard"]);
    else this.view = view;
  }

  public onSuccessModal(message) {
    this.successMessage = message;
    this.modalDisplay = "Success";
  }
  public onErrorModal(message) {
    this.errorMessage = message;
    this.modalDisplay = "Error";
  }
}
