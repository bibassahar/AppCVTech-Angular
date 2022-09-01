import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { DetailCvComponent } from './CvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './CvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './CvTech/liste-cv/liste-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './CvTech/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListeCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
