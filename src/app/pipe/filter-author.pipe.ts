import { Pipe, PipeTransform } from '@angular/core';
import { demoPics } from '../components/home-gallery/home-gallery.component';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

  transform(items: demoPics[], author: string): demoPics[] {
    if (!items || !author) {
      return items;
    }
    return items.filter(item => item.author === author);
  }

}
