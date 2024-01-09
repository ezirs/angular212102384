import { Component, Input, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() moduleName: string = '';
  public user: any = sessionStorage.getItem('userId');

  constructor(private renderer: Renderer2, private location: Location) {
    const body = document.body;
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }

  public logOut(): void {
    sessionStorage.removeItem('userId');
    this.location.go('/login');
  }
}
