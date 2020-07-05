import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  names: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getNames(): void {
    this.names = []
    this.http.get('http://localhost:3000/api/names')
      .subscribe((res) => this.names = res, (err) => console.log(err))
  }
}
