import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "register-page");
    const body = document.body;
    this.renderer.addClass(body, 'dark-mode');
  }

  ngOnInit(): void {

  }
}
