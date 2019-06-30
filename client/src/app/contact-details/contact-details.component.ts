import { Component, OnInit } from "@angular/core";
import { ContactDetailService } from "../shared/contact-detail.service";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  constructor(private service: ContactDetailService) {}

  ngOnInit() {}

  searchContact(keyword: string) {
    console.log(keyword);
    this.service.searchContactDetail(keyword);
  }
}
