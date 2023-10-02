import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthMainComponent } from "./components/auth-main/auth-main.component";

const routes: Routes = [
  {
    path: "",
    component: AuthMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
