import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

declare const $: any;
declare const moment: any;

@Component({
  selector: 'app-cuaca',
  templateUrl: './cuaca.component.html',
  styleUrls: ['./cuaca.component.css']
})
export class CuacaComponent implements OnInit, AfterViewInit {
  private table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this.table1 = $('#table1').DataTable(
      {
        'columnDefs': [
          {
            'targets': 0,
            'render': function (data: string) {
              var d = new Date(data + ' UTC');
              var html = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '<br>' + d.getHours() + ':' + d.getMinutes() + ' WIB';
              return html;
            }
          },
          {
            'targets': 1,
            'render': function (data: string) {
              var html = "<img src='" + data + "'>";
              return html;
            }
          },
          {
            'targets': 2,
            'render': function (data: string) {
              var array = data.split('||');
              var cuaca = array[0];
              var deskripsi = array[1];
              var html = '<strong>' + cuaca + '</strong><br>' + deskripsi;
              return html;
            }
          }
        ]
      }
    );
    this.bind_table1();
  }

  bind_table1(): void {
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=1630789&appid=9da43a242166d3ee2156de582463d54e').subscribe((data: any) => {
      console.log(data);

      var list = data.list;
      console.log(list);

      this.table1.clear();

      list.forEach((element: any) => {
        var weather = element.weather[0];
        console.log(weather);

        var iconUrl = 'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png';
        var cuacaDeskripsi = weather.main + '||' + weather.description;

        var main = element.main;
        console.log(main);

        var tempMin = this.kelvinTocelcius(main.temp_min);
        console.log('Temp Min: ' + tempMin);

        var tempMax = this.kelvinTocelcius(main.temp_max);
        console.log('Temp Max: ' + tempMax);

        var temp = tempMin + '⁰C - ' + tempMax + '⁰C';

        var row = [
          element.dt_txt,
          iconUrl,
          cuacaDeskripsi,
          temp
        ];

        this.table1.row.add(row);
      });

      this.table1.draw(false);
    });
  }

  kelvinTocelcius(kelvin: any): any {
    var celcius = kelvin - 273.15;
    celcius = Math.round(celcius * 100) / 100;
    return celcius;

  }


  ngOnInit(): void {
  }
}
