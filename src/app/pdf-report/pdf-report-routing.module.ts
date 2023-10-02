import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PdfReportMainComponent } from "./components/pdf-report-main/pdf-report-main.component";

const routes: Routes = [
  {
    path: "",
    component: PdfReportMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfReportRoutingModule {}
