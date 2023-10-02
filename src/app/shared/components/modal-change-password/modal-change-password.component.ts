import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-modal-change-password",
  templateUrl: "./modal-change-password.component.html",
  styleUrls: ["./modal-change-password.component.scss"],
})
export class ModalChangePasswordComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() success = new EventEmitter();
  @Output() try = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() toast = new EventEmitter();
  public currentPassword: string = "";
  public newPassword: string = "";
  public confirmPassword: string = "";
  public user: any = {};
  public showPasswordCurrent: string = "password";
  public showPasswordNew: string = "password";
  public showPasswordConfirm: string = "password";
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.user = (await this.authService.getUserInfo())["user_data"];
  }

  public onUpdate() {
    if (
      this.newPassword &&
      this.currentPassword &&
      this.confirmPassword == this.newPassword &&
      this.newPassword.length >= 8
    ) {
      this.authService
        .changePassword({
          email: this.user.email,
          newPassword: this.newPassword,
          password: this.currentPassword,
        })
        .subscribe(
          (response) => this.success.emit(response),
          (err) => {
            this.try.emit({
              message: err.error,
              modal: "Change password",
            });
          }
        );
    } else if (!this.newPassword || !this.currentPassword)
      this.toast.emit("Please complete the fields");
    else if (this.newPassword.length < 8)
      this.toast.emit("The minimum length is 8");
    else if (this.newPassword == this.confirmPassword)
      this.toast.emit("The new password and confirmation aren't the same");
  }

  public onClose() {
    this.close.emit("Hide");
  }

  /**
   * Muestra o oculta la contraseña al usuario
   */
  public onShowPassword(type) {
    switch (type) {
      case "Current":
        this.showPasswordCurrent =
          this.showPasswordCurrent == "password" ? "text" : "password";
        break;
      case "New":
        this.showPasswordNew =
          this.showPasswordNew == "password" ? "text" : "password";
        break;
      case "Confirm":
        this.showPasswordConfirm =
          this.showPasswordConfirm == "password" ? "text" : "password";
        break;
    }
  }
}
