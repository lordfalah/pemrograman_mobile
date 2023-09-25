import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nim = '212102390';
  nama = 'Irfin Falah';
  title = 'Angular';
  showSearchBox: boolean = false;
  inputText: string = '';

  toggleSearch() {
    this.showSearchBox = true;
  }
  resetSearch() {
    this.showSearchBox = false;
    this.inputText = ''; // Reset the input field when canceling
  }
}
