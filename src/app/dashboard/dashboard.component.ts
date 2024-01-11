import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    const body = document.body;
    this.renderer.removeClass(body, 'dark-mode');
    this.renderer.removeClass(body, 'login-page');
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
  }

  ngOnInit(): void {}
}
