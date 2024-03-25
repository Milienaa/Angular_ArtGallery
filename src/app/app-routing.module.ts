import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { SinglePageComponent } from './components/single-page/single-page.component';


const routes: Routes = [
  { path: '', component: HomeGalleryComponent },
  { path: 'single', component: SinglePageComponent },
  { path: 'back', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
