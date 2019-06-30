import { Component, OnInit } from "@angular/core";
import { ContactDetailService } from "../shared/contact-detail.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private service: ContactDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  searchContact(keyword: string) {
    console.log(keyword);
    this.service.searchContactDetail(keyword);
  }
}
