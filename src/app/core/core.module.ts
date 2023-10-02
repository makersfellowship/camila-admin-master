import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { MainService } from "./services/main.service";
import { SettingsService } from "./services/settings.service";
import { ModalService } from "./services/modal.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService, MainService, SettingsService, ModalService],
})
export class CoreModule {}
