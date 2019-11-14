import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { GuestListComponent } from "./guest-list/guest-list.component";
import { ScannerComponent } from "./scanner/scanner.component";

const routes: Routes = [
  {
    path: "",
    component: RegistrationComponent
  },
  {
    path: "guest",
    component: GuestListComponent
  },
  {
    path: "scanner",
    component: ScannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
