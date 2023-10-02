import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { NgxLoadingModule } from "ngx-loading";
import { ReferencesCheckModule } from "./references-check/references-check.module";

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ReferencesCheckModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
