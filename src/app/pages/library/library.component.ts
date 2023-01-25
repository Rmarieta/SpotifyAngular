import { Component } from '@angular/core';
import { FeaturedCard } from '../models/featured-card.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  products: Array<FeaturedCard> = [
    {
      id: 1,
      name: 'TUSEK',
      description:
        'Amazing playlist listing all the latest songs that have been released in Rap FR',
      image: 'https://github.com',
      width: 250,
      height: 250,
      ownerName: 'Pharalé',
    },
    {
      id: 2,
      name: 'TATATA',
      description: 'Amazing reggaeton playlist',
      image: 'https://github.com',
      width: 250,
      height: 250,
      ownerName: 'Pascalia Kyrimis',
    },
  ];
}
