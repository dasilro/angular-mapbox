import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { name: 'FullScreen', route: '/maps/fullscreen'},
    { name: 'ZoomRange', route: '/maps/zoom-range'},
    { name: 'Markers', route: '/maps/markers'},
    { name: 'Houses', route: '/maps/properties'},
    { name: 'Alone Page', route: '/alone'},
  ]
}
