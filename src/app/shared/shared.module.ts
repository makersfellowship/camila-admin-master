import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./layout/header/header.component";
import { NavigationBarComponent } from "./layout/navigation-bar/navigation-bar.component";
import { ToastComponent } from "./components/toast/toast.component";
import { ModalChangePasswordComponent } from "./components/modal-change-password/modal-change-password.component";
import { ModalSuccessComponent } from "./components/modal-success/modal-success.component";
import { ModalErrorComponent } from "./components/modal-error/modal-error.component";
import { StepperComponent } from "./components/stepper/stepper.component";
import { NgxLoadingModule } from "ngx-loading";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { RadioGroupComponent } from "./components/radio-group/radio-group.component";
import { MultipleOptionComponent } from "./components/multiple-option/multiple-option.component";
import { MatrixQuestionComponent } from "./components/matrix-question/matrix-question.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationBarComponent,
    ToastComponent,
    ModalChangePasswordComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
    StepperComponent,
    TextInputComponent,
    RadioGroupComponent,
    MultipleOptionComponent,
    MatrixQuestionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [
    HeaderComponent,
    NavigationBarComponent,
    ToastComponent,
    ModalChangePasswordComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
    StepperComponent,
    TextInputComponent,
    RadioGroupComponent,
    MultipleOptionComponent,
    MatrixQuestionComponent,
  ],
})
export class SharedModule {}
