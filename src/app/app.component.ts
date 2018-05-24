import { Component } from '@angular/core';

const tabs = require('./tabs.json');  

tabs.sort((a, b) => a.order - b.order);

interface Tab {
  id: string;
  title: string;
  order: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tabs: Tab[];

  public sidenavOptions = {
    'fixed': false,
    'top': 0,
    'bottom': 0,
  }

  constructor() {
    this.tabs = tabs;
  }
}
