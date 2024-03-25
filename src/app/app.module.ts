import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { FilterAuthorPipe } from './pipe/filter-author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    HomeGalleryComponent,
    FilterAuthorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
