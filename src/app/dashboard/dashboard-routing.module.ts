import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardMainComponent } from "./components/dashboard-main/dashboard-main.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMainRoutingModule {}
