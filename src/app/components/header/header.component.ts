import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public items: { field: string }[] = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' },
  ];
}
