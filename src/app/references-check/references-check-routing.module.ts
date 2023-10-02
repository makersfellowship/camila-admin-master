import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReferencesCheckMainComponent } from "./components/references-check-main/references-check-main.component";

const routes: Routes = [
  {
    path: "",
    component: ReferencesCheckMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencesCheckRoutingModule {}
