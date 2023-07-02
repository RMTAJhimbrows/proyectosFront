import { Component, Inject } from '@angular/core';
import { DialogData } from '../login/login.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  hide = true;
  inputUser:string="";
  inputPassword:string="";
constructor(
  public dialogRef: MatDialogRef<LoginModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
){}
  onNoClick(): void {
    this.dialogRef.close();
  }


}
