import { Component, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router, private renderer: Renderer2) {
    const body = document.body;
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }

  @Input() moduleName: string = '';
  user: any = sessionStorage.getItem('userId');

  logOut(): void {
    sessionStorage.removeItem('userId');
  }
}
