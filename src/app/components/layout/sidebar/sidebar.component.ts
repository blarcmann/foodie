import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onclose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onclose();
  }
}
