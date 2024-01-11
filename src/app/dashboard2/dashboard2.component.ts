import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component implements OnInit {
  constructor(private renderer: Renderer2) {
    const body = document.body;
    this.renderer.removeClass(body, 'sidebar-open');
    this.renderer.addClass(body, 'sidebar-closed');
    this.renderer.addClass(body, 'dark-mode');
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }

  ngOnInit(): void {}
}
