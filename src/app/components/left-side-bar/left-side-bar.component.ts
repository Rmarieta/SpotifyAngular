import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
})
export class LeftSideBarComponent {
  playlistNames: string[] = [
    'TUSEK',
    'DYENBY',
    'TATATA',
    'SHOOP',
    'KRIOKA',
    'MELODIC',
    'MGNTA',
    'MELLY',
    'SKOL',
  ];
}
