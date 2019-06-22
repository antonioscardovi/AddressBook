import { Injectable } from "@angular/core";
import { ContactDetail } from "./contact-detail.model";

@Injectable({
  providedIn: "root"
})
export class ContactDetailService {
  formData: ContactDetail;

  constructor() {}
}
