import { Router } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private renderer: Renderer2, private router: Router, private http: HttpClient) {
        const body = document.body;
        this.renderer.removeClass(body, 'dark-mode');
        this.renderer.addClass(body, 'login-page');
    }

    ngOnInit(): void {

    }

    showPeringatanModal(message: string): void {
      $('#peringatanModal').modal();
      $('#pm_message').html(message);
    }

    signIn(): void {
      console.log('signIn()');
      var userId = $('#userId').val();
      userId = encodeURIComponent(userId);

      var password = $('#password').val();
      password = encodeURIComponent(password);

      var url = "https://stmikpontianak.net/011100862/login.php" +
      "?id=" + userId +
      "&password=" + password;

      console.log('Url: ' + url);

      this.http.get(url).subscribe((data: any) => {
        console.log(data);

        var row = data[0];
        if (row.idCount != "1") {
          this.showPeringatanModal('Id atau password tidak cocok');
          return;
        }

        sessionStorage.setItem('userId', userId);
        console.log('Session data berhasil dibuat');

        this.router.navigate(['/dashboard']);

      });


    }
}
