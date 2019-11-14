import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ScannerComponent } from "./scanner/scanner.component";
import { RegistrationComponent } from "./registration/registration.component";
import { GuestListComponent } from "./guest-list/guest-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { ZXingScannerComponent } from "@zxing/ngx-scanner";

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    RegistrationComponent,
    GuestListComponent,
    NavbarComponent,
    ZXingScannerComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
