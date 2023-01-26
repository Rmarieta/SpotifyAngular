import { Component, Input } from '@angular/core';
import { FeaturedCard } from 'src/app/pages/models/featured-card.model';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css'],
})
export class CardBoxComponent {
  @Input() card: FeaturedCard | undefined;
}
