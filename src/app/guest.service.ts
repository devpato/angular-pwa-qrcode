import { Injectable } from "@angular/core";
import { Guest } from "./guest.model";
import { v4 as uuid } from "uuid";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GuestService {
  private guestSource = new BehaviorSubject<Guest[]>(null);
  guests$ = this.guestSource.asObservable();
  private guests = [
    {
      id: uuid(),
      firstName: "Pato",
      lastName: "Vargas",
      qr: "asdfadfadsfadsfsa"
    },
    {
      id: uuid(),
      firstName: "Diego",
      lastName: "Maradona",
      qr: "asdfadfadsfadsfsa"
    }
  ];

  constructor() {
    this.guestSource.next(this.guests);
  }

  addGuest(newGuest: Guest): void {
    this.guests.push(newGuest);
    this.guestSource.next(this.guests);
  }
}
