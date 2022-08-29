import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { DetailCvComponent } from './CvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './CvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './CvTech/liste-cv/liste-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListeCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
