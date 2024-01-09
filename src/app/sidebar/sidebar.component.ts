import { Component, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() moduleName: string = '';
  public user: any = sessionStorage.getItem('userId');
  constructor(private router: Router, private renderer: Renderer2) {
    const body = document.body;
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }


  logOut(): void {
    sessionStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
