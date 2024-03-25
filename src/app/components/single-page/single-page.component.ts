import { Component, Input } from '@angular/core';
import { SinglePageService } from 'src/app/service/single-page.service';
import { Router } from '@angular/router';
import { demoPics } from '../home-gallery/home-gallery.component';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent {
  @Input() demoPics: demoPics[] = [];
  public pic: demoPics | null = null;
  constructor(private singlePageService: SinglePageService,
    private router: Router) { }
  
  async goToPic() {
    await this.router.navigate(['/single']);
  }


  onClickButton(value: demoPics) {
    this.goToPic();
    this.singlePageService.setSinglePic(value);
  }

  async goBackPic() {
    await this.router.navigate(['/']);
  }

  onClickBackButton() {
    this.goBackPic();
  }

  ngOnInit():void {
    this.pic = this.singlePageService.getSinglePic();
  }
}
