import { Component, OnInit } from "@angular/core";
import { ContactDetailService } from "src/app/shared/contact-detail.service";
import { ContactDetail } from "src/app/shared/contact-detail.model";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styles: []
})
export class ContactDetailComponent implements OnInit {
  formData: ContactDetail;

  constructor(
    private service: ContactDetailService,
    private toastr: ToastrService
  ) {
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

  onSubmit(form: NgForm) {
    if (this.service.formData.CTId == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postContactDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted Successfully", "New Contact");
        this.service.refreshList();
      },
      err => {
        console.log(err);
        this.toastr.error("Failed to Submit");
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putContactDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Updated Successfully", "Contact Details");
        this.service.refreshList();
      },
      err => {
        console.log(err);
        this.toastr.error("Failed to Submit");
      }
    );
  }
}
