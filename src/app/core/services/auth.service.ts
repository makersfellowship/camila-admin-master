import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public token: any;
  public headers: HttpHeaders;
  public baseUrl: string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.setConfig();
  }

  public setConfig() {
    this.baseUrl = environment.baseUrl;
    this.headers = new HttpHeaders();
    this.headers = this.headers.set("Content-Type", "application/json");
  }

  public authenticateUser({ email, password }) {
    return this.http.post(
      `${this.baseUrl}api/user/administrator/authentication`,
      { email, password },
      { headers: this.headers }
    );
  }

  public storageUserData({
    token,
    user,
    currentCompany,
  }: {
    token: string;
    user: any;
    currentCompany: any;
  }) {
    this.token = token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("currentCompany", JSON.stringify(currentCompany));
  }

  public getUserInfo() {
    const token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      authorization: token || "",
    });
    return this.http
      .get(`${this.baseUrl}users/user-data`, { headers: this.headers })
      .toPromise();
  }

  public logout() {
    this.token = null;
    localStorage.clear();
    this.router.navigate(["/auth"]);
  }

  public changePassword({ email, password, newPassword }) {
    const data = { email, password, newPassword };
    return this.http.post(
      `${this.baseUrl}auth/change-password`,
      JSON.stringify(data),
      {
        headers: this.headers,
      }
    );
  }
}
