import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    remember: false,
    username: '',
    password: '',
  };
  constructor(public dialogRef: MdDialogRef<LoginComponent>) {}

  ngOnInit() {}
  onSubmit() {
    this.dialogRef.close();
  }
}
