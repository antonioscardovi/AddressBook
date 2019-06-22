import { Injectable } from "@angular/core";
import { ContactDetail } from "./contact-detail.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactDetailService {
  formData: ContactDetail;
  readonly rootURL = "http://localhost:60809/api";
  list: ContactDetail[];

  constructor(private http: HttpClient) {}

  // submit new contact
  postContactDetail() {
    return this.http.post(this.rootURL + "/ContactDetail", this.formData);
  }

  // update contact
  putContactDetail() {
    return this.http.put(
      this.rootURL + "/ContactDetail/" + this.formData.CTId,
      this.formData
    );
  }

  deleteContactDetail(id) {
    return this.http.delete(this.rootURL + "/ContactDetail/" + id);
  }

  // clear form after submit
  refreshList() {
    this.http
      .get(this.rootURL + "/ContactDetail")
      .toPromise()
      .then(res => (this.list = res as ContactDetail[]));
  }
}
