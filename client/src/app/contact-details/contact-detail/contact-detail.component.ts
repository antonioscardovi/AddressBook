import { Component, OnInit } from "@angular/core";
import { ContactDetailService } from "src/app/shared/contact-detail.service";
import { ContactDetail } from "src/app/shared/contact-detail.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styles: []
})
export class ContactDetailComponent implements OnInit {
  formData: ContactDetail;

  constructor(private service: ContactDetailService) {
    this.formData = {
      CTId: 0,
      FirstName: "",
      LastName: "",
      Address: "",
      PhoneNumber: ""
    };
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      CTId: 0,
      FirstName: "",
      LastName: "",
      Address: "",
      PhoneNumber: ""
    };
  }
}
