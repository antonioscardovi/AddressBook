import { ContactDetailService } from "./../../shared/contact-detail.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-detail-list",
  templateUrl: "./contact-detail-list.component.html",
  styles: []
})
export class ContactDetailListComponent implements OnInit {
  constructor(private service: ContactDetailService) {}

  ngOnInit() {
    this.service.refreshList();
  }
}
