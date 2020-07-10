import { Component } from '@angular/core';

interface country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidform';

  countrys: country[] = [
    {value: 'default-0', viewValue: ''},
    {value: 'pakistan-1', viewValue: 'Pakistan'},
    {value: 'china-1', viewValue: 'China'},
    {value: 'Dubai-3', viewValue: 'Dubai'}
  ];
}


