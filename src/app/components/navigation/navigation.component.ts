import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toggleNavigation: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    return this.toggleNavigation = !this.toggleNavigation;
  }

}
