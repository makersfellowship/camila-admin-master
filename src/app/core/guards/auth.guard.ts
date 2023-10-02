import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ModalService } from "../services/modal.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  async canActivate() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["/auth"]);
      return false;
    } else if (token) {
      return true;
    }
  }
}
