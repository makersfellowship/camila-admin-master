import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  /** API Access - ENV */
  public baseUrl: string = "";
  /** Variable that holds the http headers */
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.setHeaders();
  }

  public setHeaders() {
    const token = localStorage.getItem("token");
    this.baseUrl = environment.baseUrl;
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      authorization: token || "",
    });
  }

  /**
   * API Generico GET
   * @param {string} api api path
   * @return {Observable<any>} respuesta asincrónica
   */
  get({ api }: { api: string }): Observable<any> {
    this.setHeaders();
    return this.http.get(`${this.baseUrl}${api}`, { headers: this.headers });
  }

  /**
   * API Generico PROMISE GET
   * @param {string} api
   * @return {Observable<any>} respuesta asincrónica
   */
  getPromise({ api }: { api: string }): Promise<any> {
    this.setHeaders();
    return this.http
      .get(`${this.baseUrl}${api}`, { headers: this.headers })
      .toPromise();
  }

  /**
   * API Generico POST
   * @param {string} api
   * @param {any} data objeto a persistir
   * @return {Observable<any>} respuesta asincrónica
   */
  post({ api, data }: { api: string; data: any }): Observable<any> {
    return this.http.post(`${this.baseUrl}${api}`, data, {
      headers: this.headers,
      // observe: "response"
    });
  }

  /**
   * API Generico DELETE
   * @param {string} api /id
   * @return {Observable<any>} respuesta asincrónica
   */
  delete({ api }: { api: string }): Observable<any> {
    return this.http.delete(`${this.baseUrl}${api}`, { headers: this.headers });
  }

  /**
   * API Generico PUT
   * @param {string} api /id
   * @param {any} data propiedades a actualizar
   * @return {Observable<any>} respuesta asincrónica
   */
  put({ api, data }: { api: string; data: any }): Observable<any> {
    return this.http.put(`${this.baseUrl}${api}`, data, {
      headers: this.headers,
    });
  }
}
