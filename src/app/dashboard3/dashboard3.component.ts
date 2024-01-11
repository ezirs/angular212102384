import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css'],
})
export class Dashboard3Component implements OnInit {
  constructor(private renderer: Renderer2) {
    const body = document.body;
    this.renderer.removeClass(body, 'sidebar-open');
    this.renderer.addClass(body, 'sidebar-closed');
    this.renderer.removeClass(body, 'dark-mode');
    this.renderer.addClass(body, 'sidebar-mini');
  }

  ngOnInit(): void {}
}
