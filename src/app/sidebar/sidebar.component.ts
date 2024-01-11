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
    const body = document.body;

    const currentHeight = getComputedStyle(body).height;

    const classesToRemove = body.classList.value;
    const classesArray = classesToRemove.split(' ');
    classesArray.forEach(className => {
      this.renderer.removeClass(body, className);
    });
    this.renderer.addClass(body, 'hold-transition');
    this.renderer.addClass(body, 'login-page');

    if (currentHeight) {
      this.renderer.removeStyle(body, 'height');
    }
    sessionStorage.removeItem('userId');

    this.router.navigate(['/login']);
  }
}
