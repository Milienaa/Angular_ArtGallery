import { Injectable } from '@angular/core';
import { demoPics } from '../components/home-gallery/home-gallery.component';


@Injectable({
  providedIn: 'root'
})
export class SinglePageService {

  singlePic: demoPics | null = null;
  constructor() { }
  
  setSinglePic(value:demoPics) {
    this.singlePic = value;
  }

  getSinglePic() {
    return this.singlePic;
  }

  
}
