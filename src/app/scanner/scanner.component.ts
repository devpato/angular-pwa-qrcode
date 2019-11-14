import { Component, OnInit, ViewChild } from "@angular/core";
import { Guest } from "../guest.model";
import { GuestService } from "../guest.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-scanner",
  templateUrl: "./scanner.component.html",
  styleUrls: ["./scanner.component.scss"]
})
export class ScannerComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResult: Guest;
  guestExist: boolean;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {}

  clearResult(): void {
    this.qrResult = null;
  }

  onCodeResult(resultString: string): void {
    this.guestExist = null;
    if (this.checkQRJSON(resultString)) {
      this.qrResult = JSON.parse(resultString);
      this.checkInGuest();
      this.clearMessage();
    } else {
      this.guestExist = false;
      this.clearMessage();
    }
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  checkInGuest(): void {
    this.guestService.guests$
      .pipe(
        map(guests =>
          guests.find((guest: Guest) => guest.id === this.qrResult.id)
        )
      )
      .subscribe(guest => {
        if (guest !== null && guest !== undefined) {
          this.guestExist = true;
        } else {
          this.guestExist = false;
        }
        this.clearResult();
        this.clearMessage();
      });
  }

  clearMessage() {
    setTimeout(() => {
      this.guestExist = null;
    }, 3000);
  }

  checkQRJSON(qrString: string): boolean {
    if (
      /^[\],:{}\s]*$/.test(
        qrString
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
