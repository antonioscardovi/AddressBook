import { Injectable } from "@angular/core";
import { ContactDetail } from "./contact-detail.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactDetailService {
  formData: ContactDetail;
  readonly rootURL = "http://localhost:60809/api";

  constructor(private http: HttpClient) {}

  postContactDetail(formData: ContactDetail) {
    return this.http.post(this.rootURL + "/ContactDetail", formData);
  }
}
