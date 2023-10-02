import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthMainComponent } from "./components/auth-main/auth-main.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [AuthMainComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class AuthModule {}
