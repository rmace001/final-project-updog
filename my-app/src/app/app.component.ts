import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayName: boolean = false;
  

  constructor() { this.displayName = false; }

  hide() { this.displayName = false; }

  show() { this.displayName = true; }

  toggle() { this.displayName = !this.displayName; }
  title = 'my-app';
}
