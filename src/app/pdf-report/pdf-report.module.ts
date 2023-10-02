import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PdfReportRoutingModule } from "./pdf-report-routing.module";
import { PdfReportMainComponent } from "./components/pdf-report-main/pdf-report-main.component";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [PdfReportMainComponent],
  imports: [CommonModule, PdfReportRoutingModule, NgxLoadingModule.forRoot({})],
})
export class PdfReportModule {}
