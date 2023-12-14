import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=287d75acf4fb4699a4e289d4d6c52336';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD (Dollar Amerika)', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD : ' + sgd2);
      var row = [2, 'SGD (Dollar Singapura)', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND : ' + bnd2);
      var row = [3, 'BND (Dollar Brunei)', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd2);
      var row = [4, 'HKD (Dollar Hongkong)', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc2);
      var row = [5, 'BTC (Bitcoin)', btc2];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, 'en-US', '', 'AUD');
      console.log('AUD : ' + aud2);
      var row = [6, 'AUD (Dollar Australia)', aud2];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, 'en-US', '', 'JPY');
      console.log('JPY : ' + jpy2);
      var row = [7, 'JPY (Yen Jepang)', jpy2];
      this._table1.row.add(row);

      var krw = rates.IDR / rates.KRW;
      var krw2 = formatCurrency(krw, 'en-US', '', 'KRW');
      console.log('KRW : ' + krw2);
      var row = [8, 'KRW (Won Korea)', krw2];
      this._table1.row.add(row);

      var myr = rates.IDR / rates.MYR;
      var myr2 = formatCurrency(myr, 'en-US', '', 'MYR');
      console.log('MYR : ' + myr2);
      var row = [9, 'MYR (Ringgit Malaysia)', myr2];
      this._table1.row.add(row);

      var php = rates.IDR / rates.PHP;
      var php2 = formatCurrency(php, 'en-US', '', 'PHP');
      console.log('PHP : ' + php2);
      var row = [10, 'PHP (Peso Filipina)', php2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
