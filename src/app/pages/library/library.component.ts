import { Component } from '@angular/core';
import { FeaturedCard } from '../models/featured-card.model';

const ROW_HEIGHT: { [id: number]: number } = { 4: 310 };

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  cols = 4;
  rowHeight = ROW_HEIGHT[this.cols];

  featuredCards: Array<FeaturedCard> = [
    {
      id: 1,
      name: 'TUSEK',
      description:
        'Amazing playlist listing all the latest songs that have been released in Rap FR',
      image:
        'https://raw.githubusercontent.com/Rmarieta/SpotifyAngular/main/src/assets/static/playlist_1.png',
      width: 250,
      height: 250,
      ownerName: 'Pharalé',
    },
    {
      id: 2,
      name: 'TATATA',
      description: 'Amazing reggaeton playlist',
      image:
        'https://raw.githubusercontent.com/Rmarieta/SpotifyAngular/main/src/assets/static/playlist_2.png',
      width: 250,
      height: 250,
      ownerName: 'Pascalia Kyrimis',
    },
    {
      id: 3,
      name: 'MELODIC',
      description: 'Playlist with melodic techno',
      image:
        'https://raw.githubusercontent.com/Rmarieta/SpotifyAngular/main/src/assets/static/playlist_3.png',
      width: 250,
      height: 250,
      ownerName: 'Pharalé',
    },
    {
      id: 4,
      name: 'DRILLITY DRILL',
      description: 'Drill music, FR & UK',
      image:
        'https://raw.githubusercontent.com/Rmarieta/SpotifyAngular/main/src/assets/static/playlist_4.png',
      width: 250,
      height: 250,
      ownerName: 'Pharalé',
    },
    {
      id: 5,
      name: 'MGNTA',
      description: 'Old school magenta stage type of music',
      image:
        'https://raw.githubusercontent.com/Rmarieta/SpotifyAngular/main/src/assets/static/playlist_5.png',
      width: 250,
      height: 250,
      ownerName: 'Pharalé',
    },
  ];
}
