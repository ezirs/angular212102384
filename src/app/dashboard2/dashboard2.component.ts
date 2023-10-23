import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component implements OnInit {
  title = 'Dashboard v2';
  constructor(private renderer: Renderer2) {
    const body = document.body;
    this.renderer.addClass(body, 'dark-mode');
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }

  ngOnInit(): void {}
}
