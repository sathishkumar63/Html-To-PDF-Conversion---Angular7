import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggled = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleRightSidebar() {
    this.toggled = !this.toggled;
  }

  public getRightSidebarState() {
    return this.toggled;
  }

  public setRightSidebarState(state: boolean) {
    this.toggled = state;
  }

  public hideRightSidebar() {
    this.setRightSidebarState(true);
  }

}
