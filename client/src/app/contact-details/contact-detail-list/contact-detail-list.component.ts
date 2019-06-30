import { ContactDetailService } from "./../../shared/contact-detail.service";
import { Component, OnInit } from "@angular/core";
import { ContactDetail } from "src/app/shared/contact-detail.model";
import { ToastrService } from "ngx-toastr";
import { ContactDetailComponent } from "../contact-detail/contact-detail.component";
import { ContactDetailsComponent } from "../contact-details.component";
import { ConfirmDialogModule } from "../../confirm-dialog/confirm-dialog.module";
import { ConfirmDialogService } from "src/app/confirm-dialog/confirm-dialog.service";

@Component({
  selector: "app-contact-detail-list",
  templateUrl: "./contact-detail-list.component.html",
  styles: []
})
export class ContactDetailListComponent implements OnInit {
  currentContactInfo: any = {};

  constructor(
    private service: ContactDetailService,
    private toastr: ToastrService,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit() {
    this.service.refreshList();
  }

  // show info in contact modal
  contactInfo(id) {
    this.service.getContactDetail(id).subscribe(res => {
      this.currentContactInfo = res;
    });
  }

  // populate form with old details on edit
  populateForm(cd: ContactDetail) {
    this.service.formData = Object.assign({}, cd);
  }

  onDelete(CTId) {
    this.confirmDialogService.confirmThis(
      "Confirm Delete",
      () => {
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
      },
      () => console.log("closed dialog")
    );
  }
}
