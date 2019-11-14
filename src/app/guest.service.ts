import { Injectable } from "@angular/core";
import { Guest } from "./guest.model";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GuestService {
  private guestSource = new BehaviorSubject<Guest[]>(null);
  guests$ = this.guestSource.asObservable();
  private guests = [
    {
      id: "7558e6e5-3cfa-4c24-b5b7-653ecbd49925",
      firstName: "Pato",
      lastName: "Vargas"
    },
    {
      id: "4847498c-b57f-4ceb-8c0c-8831b9972158",
      firstName: "Diego",
      lastName: "Maradona"
    }
  ];

  constructor() {
    this.populateQR();
    this.guestSource.next(this.guests);
  }

  populateQR(): void {
    this.guests.forEach((g: Guest) => (g.qr = JSON.stringify({ ...g })));
  }

  addGuest(newGuest: Guest): void {
    this.guests.push(newGuest);
    this.guestSource.next(this.guests);
  }
}
