import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ProfileService } from '../../services/profile.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

   constructor(
      public dialogRef: MatDialogRef<LogoutComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
      private _ProfileService:ProfileService
    ) {}

    onLogOut():void{
      this._ProfileService.logOut()
      this.onCloseDialog()
    }

    onCloseDialog():void{
      this.dialogRef.close()
    }


}
