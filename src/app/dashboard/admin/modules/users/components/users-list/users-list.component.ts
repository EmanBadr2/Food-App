import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/services/helper.service';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { Router , ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/dashboard/components/delete-item/delete-item.component';
import { NoDataComponent } from 'src/app/shared/components/no-data/no-data.component';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/users';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit  {

  showNoData:boolean=false ;
  baseUrl:string = 'https://upskilling-egypt.com:3006/';
  allLOggedInUser:IUser[]=[]
  length !: number ;
  UsersPagesDetails : any = { pageSize:10 , pageNumber:1  }
   searchName: string = '' ;
   usersRole :any=[ { role:'Admin' , groupID:1} , { role:'User'  ,groupID:2}]
   groupId:number|undefined ;

    constructor(private _UsersService:UsersService , private _HelperService:HelperService ,
     private _ToastrService:ToastrService , public dialog: MatDialog ,
     private _Router: Router )
    {}

  ngOnInit(): void {
    this.onGettingAllLoggedInUsers( )

  }
  onGettingAllLoggedInUsers( ):void{
     let allUserParams = {
      pageSize: this.UsersPagesDetails.pageSize ,       //required
      pageNumber: this.UsersPagesDetails.pageNumber ,    //required
      userName: this.searchName ,
      groups:this.groupId ,
    }

    function removeUndefinedProperties(allUserParams: any): any {
      for (const key in allUserParams) {
        if (allUserParams[key] === undefined) {
          delete allUserParams[key];
        }
      }
      return allUserParams;
    }
    allUserParams = removeUndefinedProperties(allUserParams)

    this._UsersService.onGettingAllLoggedInUsers(allUserParams).subscribe({
      next:(res)=>{
        // console.log(res);
        this.allLOggedInUser= res.data
        this.length= res.totalNumberOfRecords
        allUserParams.pageNumber = res.pageNumber
        allUserParams.pageSize = res.pageSize

        if(res.data.length ==0){
          this.showNoData=true
          console.log( 'Create component for empty Data');
        }

      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })
  }



  clearFilters():void{
    this.searchName = ''
    this.groupId= undefined
    this.showNoData = false
    this.onGettingAllLoggedInUsers()
  }

// ---------------------
// paginator
 handelPageEvent(event:PageEvent){
  this.UsersPagesDetails = {
     pageNumber: event.pageIndex+1 ,
     pageSize: event.pageSize
  }
  this.length = event.length
  this.onGettingAllLoggedInUsers( )
  }



}
