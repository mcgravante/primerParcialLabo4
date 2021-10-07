import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  logOut() {
    this.isLogged=false;
  }

  logIn() {
    this.isLogged = true;
  }
}
