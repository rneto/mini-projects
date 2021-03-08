import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today = new FormControl(new Date());

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, date: string) {
    this._snackBar.open(message, date, {
      duration: 2000,
    });
  }
}
