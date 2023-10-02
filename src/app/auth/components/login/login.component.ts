import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Output() redirectTo = new EventEmitter<String>();
  @Output() error = new EventEmitter();

  public email: string = "";
  public password: string = "";
  public inputType: string = "password";
  public showPassword: boolean = false;
  /** Components rounting */
  public onRedirectTo = (view: string) => this.redirectTo.emit(view);
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public onLogin() {
    if (!this.email || !this.password) {
      this.error.emit({ msg: "Please fill the fields" });
      return;
    }
    this.authService
      .authenticateUser({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          let { token, user, currentCompany } = response;
          this.authService.storageUserData({ token, user, currentCompany });
          this.redirectTo.emit("Dashboard");
        },
        (err) => {
          let msg =
            err.error.success == undefined
              ? err.error.errors
                ? err.error.errors[0].msg
                : err.error.msg
              : err.error.msg || "Error please contact with support team";
          this.error.emit({ msg });
        }
      );
  }

  /**
   * Muestra o oculta la contraseña al usuario
   */
  public onShowPassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? "text" : "password";
  }
}
