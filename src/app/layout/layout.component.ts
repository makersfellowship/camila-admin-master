import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ModalService } from "../core/services/modal.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {
  public modalDisplay: string = "Hide"; // Hide, Change password, Success, Error
  public subscribeModal$: Subscription;
  public viewContact;
  public transaction;
  public successMessage;
  public errorMessage;
  public toast: boolean = false;
  public message = "";
  public try;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.subscribeModal$ = this.modalService.modal.subscribe((output: any) => {
      switch (output.modal) {
        case "Success":
          this.modalDisplay = output.modal;
          this.successMessage = output;
          break;
        case "Error":
          this.modalDisplay = output.modal;
          this.errorMessage = output;
          break;
        default:
          this.modalDisplay = output.modal;
          break;
      }
    });
  }

  ngOnDestroy() {
    this.subscribeModal$.unsubscribe();
  }

  public onSuccessModal(message) {
    this.successMessage = message;
    this.modalDisplay = "Success";
  }
  public onErrorModal(message) {
    this.errorMessage = message;
    this.modalDisplay = "Error";
  }

  public onTry(event) {
    this.try = { message: event.message, modal: event.modal };
    this.modalDisplay = "Try Again";
  }

  public onShowToast({ message }) {
    this.message = message;
    this.toast = true;
    setTimeout(() => (this.toast = false), 3500);
  }
}
