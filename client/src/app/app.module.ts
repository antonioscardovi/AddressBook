import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ContactDetailComponent } from "./contact-details/contact-detail/contact-detail.component";
import { ContactDetailListComponent } from "./contact-details/contact-detail-list/contact-detail-list.component";
import { ContactDetailService } from "./shared/contact-detail.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactDetailComponent,
    ContactDetailListComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ContactDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
