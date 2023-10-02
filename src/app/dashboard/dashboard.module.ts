import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardMainComponent } from "./components/dashboard-main/dashboard-main.component";
import { DashboardMainRoutingModule } from "./dashboard-routing.module";
import { SurveyCardComponent } from "./components/survey-card/survey-card.component";
import { FormsModule } from "@angular/forms";
import { NgxLoadingModule } from "ngx-loading";
import { SurveyDetailComponent } from "./components/survey-detail/survey-detail.component";
import { SurveyResponseComponent } from "./components/survey-response/survey-response.component";
import { CandidateResponseComponent } from "./components/candidate-response/candidate-response.component";
import { TextResponseComponent } from "./components/text-response/text-response.component";
import { MultipleOptionResponseComponent } from "./components/multiple-option-response/multiple-option-response.component";
import { SingleOptionResponseComponent } from "./components/single-option-response/single-option-response.component";
import { ReferenceResponseComponent } from "./components/reference-response/reference-response.component";
import { ResponseDetailComponent } from "./components/response-detail/response-detail.component";

@NgModule({
  declarations: [
    DashboardMainComponent,
    SurveyCardComponent,
    SurveyDetailComponent,
    SurveyResponseComponent,
    CandidateResponseComponent,
    TextResponseComponent,
    MultipleOptionResponseComponent,
    SingleOptionResponseComponent,
    ReferenceResponseComponent,
    ResponseDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardMainRoutingModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class DashboardModule {}
