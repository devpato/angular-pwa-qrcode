import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { v4 as uuid } from "uuid";
import { GuestService } from "../guest.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    const guest = { ...this.registrationForm.value, id: uuid() };
    guest.qr = JSON.stringify(guest);
    this.guestService.addGuest(guest);
    this.registrationForm.reset();
    this.router.navigate(["/guests"]);
  }
}
