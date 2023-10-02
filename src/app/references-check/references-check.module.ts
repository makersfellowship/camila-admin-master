import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReferencesCheckRoutingModule } from "./references-check-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { ReferencesCheckMainComponent } from "./components/references-check-main/references-check-main.component";
import { TitleComponent } from "./components/title/title.component";
import { StepperComponent } from "./components/stepper/stepper.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { SharedModule } from "../shared/shared.module";
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";
import { FormAddReferencesComponent } from "./components/form-add-references/form-add-references.component";
import { FormQuestionsComponent } from "./components/form-questions/form-questions.component";
import { FormsModule } from "@angular/forms";
import { FormQuestionsReferenceComponent } from "./components/form-questions-reference/form-questions-reference.component";
import { StepperReferenceComponent } from "./components/stepper-reference/stepper-reference.component";
import { ReferenceTrackingComponent } from "./components/reference-tracking/reference-tracking.component";
import { Ng2TelInputModule } from "ng2-tel-input";
import { NgxLoadingModule } from "ngx-loading";
import { EvaluatorInfoComponent } from "./components/evaluator-info/evaluator-info.component";
@NgModule({
  declarations: [
    HeaderComponent,
    ReferencesCheckMainComponent,
    TitleComponent,
    StepperComponent,
    DynamicFormComponent,
    ContactInfoComponent,
    FormAddReferencesComponent,
    FormQuestionsComponent,
    StepperReferenceComponent,
    FormQuestionsReferenceComponent,
    ReferenceTrackingComponent,
    EvaluatorInfoComponent,
  ],
  imports: [
    CommonModule,
    ReferencesCheckRoutingModule,
    SharedModule,
    FormsModule,
    Ng2TelInputModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [ReferencesCheckMainComponent],
})
export class ReferencesCheckModule {}
