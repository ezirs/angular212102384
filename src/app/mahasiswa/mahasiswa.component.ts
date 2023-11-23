import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  data: any;
  table1: any;

  constructor (private http: HttpClient, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this.table1 = $('#table1').DataTable();
    this.bind_mahasiswa();

  }

  ngOnInit(): void {

  }

  bind_mahasiswa(): void {
    this.http.get("https://stmikpontianak.net/011100862/tampilMahasiswa.php")
      .subscribe((data: any) => {
        console.log(data);

        this.table1.clear();

        data.forEach((element: any) => {
          var tempatTanggalLahir = element.TempatLahir + " , " + element.TanggalLahir;

          var row = [
            element.NIM,
            element.Nama,
            element.JenisKelamin,
            tempatTanggalLahir,
            element.JP,
            element.Alamat,
            element.StatusNikah,
            element.TahunMasuk
          ];

          console.log(tempatTanggalLahir);
          // Menggunakan $('#table1') untuk merujuk ke elemen HTML dengan ID 'table1'
          this.table1.row.add(row);
        });

        // Menggunakan $('#table1') untuk merujuk ke elemen HTML dengan ID 'table1'
        this.table1.draw(false);
      });
  }

  showTambahModal(): void {
    $('#tambahModal').modal()
  }

  postRecord(): void {
    var alamat = $('#alamat').val();
    var jenisKelamin = $('#jenisKelamin').val();
    var jp = $('#jp').val();
    var nama = $('#nama').val();
    var nim = $('#nim').val();
    var statusPernikahan = $('#statusPernikahan').val();
    var tahunMasuk = $('#tahunMasuk').val();
    var tanggalLahir = $('#tanggalLahir').val();
    var tempatLahir = $('#tempatLahir').val();

    if (nim.length == 0) {
      alert('Nim belum diisi');
      return;
    }
    if (alamat.length == 0) {
      alert('Alamat belum diisi');
      return;
    }
    if (nama.length == 0) {
      alert('Nama belum diisi');
      return;
    }
    if (tahunMasuk.length == 0) {
      alert('Tahun masuk belum diisi');
      return;
    }
    if (tanggalLahir.length == 0) {
      alert('Tanggal lahir belum diisi');
      return;
    }
    if (tempatLahir.length == 0) {
      alert('Tempat lahir belum diisi');
      return;
    }

    alamat = encodeURIComponent(alamat);
    jenisKelamin = encodeURIComponent(jenisKelamin);
    jp = encodeURIComponent(jp);
    nama = encodeURIComponent(nama);
    nim = encodeURIComponent(nim);
    statusPernikahan = encodeURIComponent(statusPernikahan);
    tahunMasuk = encodeURIComponent(tahunMasuk);
    tanggalLahir = encodeURIComponent(tanggalLahir);
    tempatLahir = encodeURIComponent(tempatLahir);

    var url = "https://stmikpontianak.net/011100862/tambahMahasiswa.php" +
    "?alamat=" + alamat +
    "&jenisKelamin=" + jenisKelamin +
    "&jp=" + jp +
    "&nama=" + nama +
    "&nim=" + nim +
    "&statusPernikahan=" + statusPernikahan +
    "&tahunMasuk=" + tahunMasuk +
    "&tanggalLahir=" + tanggalLahir +
    "&tempatLahir=" + tempatLahir;

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      alert(data.status + " --> " + data.message);

      this.bind_mahasiswa();
      $('#tambahModal').modal('hide')
    });

  }
}
