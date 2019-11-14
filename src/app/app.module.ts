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
import { ZXingScannerModule } from "@zxing/ngx-scanner";
@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    RegistrationComponent,
    GuestListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
