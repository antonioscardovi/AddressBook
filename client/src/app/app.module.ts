import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ContactDetailComponent } from "./contact-details/contact-detail/contact-detail.component";
import { ContactDetailListComponent } from "./contact-details/contact-detail-list/contact-detail-list.component";
import { ContactDetailService } from "./shared/contact-detail.service";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmDialogService } from "./confirm-dialog/confirm-dialog.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactDetailComponent,
    ContactDetailListComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [ContactDetailService, ConfirmDialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
