import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {
    const body = document.body;
    this.renderer.addClass(body, 'dark-mode');
  }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable(
      {
        'columnDefs': [
          {
            'targets': 2,
            'className': 'text-right'
          }
        ]
      }
    );

    this.getData();
  }

  ngOnInit(): void {

  }

  getData(): void {
    console.log('getData()');

    var url = 'https://openexchangerates.org/api/latest.json?app_id=cb0cbb7805664ab495f13a53769b0d6e';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD: ' + idr2);

      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      // var sgd = rates.IDR / rates.SGD;
      // var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      // console.log('SGD: ' + sgd2);
      // row = [2, 'SGD', sgd2];
      // this._table1.row.add(row);

      // var bnd = rates.IDR / rates.BND;
      // var bnd2 = formatCurrency(bnd2, 'en-US', '', 'BND');
      // console.log('BND: ' + bnb2);
      // row = [3, 'BND', bnb2];
      // this._table1.row.add(row);

      // var hkd = rates.IDR / rates.HKD;
      // var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      // console.log('HKD: ' + hkd2);
      // row = [4, 'HKD', hkd2];
      // this._table1.row.add(row);

      // var btc = rates.IDR / rates.BTC;
      // var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      // console.log('BTC: ' + btc2);
      // row = [5, 'BTC', btc2];
      // this._table1.row.add(row);

      // var aed = rates.IDR / rates.AED;
      // var aed2 = formatCurrency(aed, 'en-US', '', 'AED');
      // console.log('AED: ' + aed2);
      // row = [6, 'AED', aed2];
      // this._table1.row.add(row);

      // var all = rates.IDR / rates.ALL;
      // var all2 = formatCurrency(all, 'en-US', '', 'ALL');
      // console.log('ALL: ' + all2);
      // row = [7, 'ALL', all2];
      // this._table1.row.add(row);

      // var amd = rates.IDR / rates.AMD;
      // var amd2 = formatCurrency(amd, 'en-US', '', 'AMD');
      // console.log('AMD: ' + amd2);
      // row = [8, 'AMD', amd2];
      // this._table1.row.add(row);

      // var btn = rates.IDR / rates.BTN;
      // var btn2 = formatCurrency(btn, 'en-US', '', 'BTN');
      // console.log('BTN: ' + btn2);
      // row = [9, 'BTN', btn2];
      // this._table1.row.add(row);

      // var sos = rates.IDR / rates.SOS;
      // var sos2 = formatCurrency(sos, 'en-US', '', 'SOS');
      // console.log('SOS: ' + sos2);
      // row = [10, 'SOS', sos2];
      // this._table1.row.add(row);

      var currencies = ['SGD', 'BND', 'HKD', 'BTC', 'AED', 'ALL', 'AMD', 'BTN', 'SOS'];
      var rows = [];

      for (var i = 0; i < currencies.length; i++) {
        var currency = currencies[i];
        var rate = rates.IDR / rates[currency];
        var formattedRate = formatCurrency(rate, 'en-US', '', currency);
        console.log(currency + ': ' + formattedRate);
        var row = [2 + i, currency, formattedRate];
        rows.push(row);
      }
      this._table1.rows.add(rows);

      this._table1.draw(false);

    });

  }
}
