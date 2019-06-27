import { ContactDetailService } from "./../../shared/contact-detail.service";
import { Component, OnInit } from "@angular/core";
import { ContactDetail } from "src/app/shared/contact-detail.model";
import { ToastrService } from "ngx-toastr";
import { ContactDetailComponent } from "../contact-detail/contact-detail.component";
import { ContactDetailsComponent } from "../contact-details.component";

@Component({
  selector: "app-contact-detail-list",
  templateUrl: "./contact-detail-list.component.html",
  styles: []
})
export class ContactDetailListComponent implements OnInit {
  constructor(
    private service: ContactDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.refreshList();
  }

  contactInfo(id) {
    this.service.getContactDetail(id);
  }

  populateForm(cd: ContactDetail) {
    this.service.formData = Object.assign({}, cd);
  }

  onDelete(CTId) {
    if (confirm("Confirm Delete")) {
      this.service.deleteContactDetail(CTId).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning("Deleted Successfully", "Contact Details");
        },
        err => {
          console.log(err);
          this.toastr.error("Failed to Delete");
        }
      );
    }
  }
}
