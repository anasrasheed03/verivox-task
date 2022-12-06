import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// import { AppService } from './services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from './content/layout/layout.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
