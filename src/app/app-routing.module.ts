import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { LoggedGuard } from "./core/guards/logged.guard";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: "auth",
    canActivate: [LoggedGuard],
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "survey",
    loadChildren: () =>
      import("./references-check/references-check.module").then(
        (m) => m.ReferencesCheckModule
      ),
  },
  {
    path: "report",
    loadChildren: () =>
      import("./pdf-report/pdf-report.module").then((m) => m.PdfReportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
