import { ContactDetailService } from "./../../shared/contact-detail.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-detail-list",
  templateUrl: "./contact-detail-list.component.html",
  styles: []
})
export class ContactDetailListComponent implements OnInit {
  constructor(private service: ContactDetailService) {}

  ngOnInit() {}

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  //   this.service.formData = {
  //     CTId: 0,
  //     FirstName: '',
  //     LastName: '',
  //     Address: '',
  //     PhoneNumber: ''
  //   }
  // }
}
