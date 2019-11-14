import { Component, OnInit } from "@angular/core";
import { GuestService } from "../guest.service";

@Component({
  selector: "app-guest-list",
  templateUrl: "./guest-list.component.html",
  styleUrls: ["./guest-list.component.scss"]
})
export class GuestListComponent implements OnInit {
  guestList$ = this.guestService.guests$;
  elementType: "url" | "canvas" | "img" = "url";
  constructor(private guestService: GuestService) {}
  ngOnInit() {}
}
