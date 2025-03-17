import { Component, OnDestroy, OnInit  ,  Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { formatDate } from '@angular/common';
import { Router  , ActivatedRoute  } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { IUser } from '../../admin/modules/users/models/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit  {


    isEditMode:boolean=false ;
    userForm : FormGroup = new FormGroup({
     id  : new FormControl('' ) ,
      userName: new FormControl('' ) ,
      email :  new FormControl('' ) ,
      country :  new FormControl('' ),
      phoneNumber : new FormControl('' ) ,
      imagePath: new FormControl('' ) ,
      recipeImage :  new FormControl('' ) ,
      group : new FormGroup({
        id: new FormControl('' ) ,
        name :  new FormControl('' ) ,
        creationDate: new FormControl('' ) ,
        modificationDate: new FormControl('' ) ,
      }) ,
      creationDate: new FormControl('' ) ,
      modificationDate: new FormControl('' ) ,
      confirmPassword: new FormControl('') ,
      profileImage: new FormControl('') ,
     })



  constructor(private _ProfileService:ProfileService ,
    private _ToastrService:ToastrService ,
    private _Router:Router ,
  ){}


    ngOnInit(): void {
      this.onGettingCurrentUser()
      if(this.userForm){
        this.sendDataToParent()
      }
    }


    onGettingCurrentUser(){
      this._ProfileService.onGettingCurrentUser().subscribe({
        next:(res)=>{
          this.userForm.patchValue({
            id :res.id ,
            userName:res.userName ,
            country : res.country ,
            email : res.email,
            phoneNumber :res.phoneNumber,
            imagePath :res.imagePath ,
             group:{
              id  :res.group.id,
              name : res.group.name ,
              creationDate :res.group.creationDate ,
              modificationDate :res.group.modificationDate ,
             } ,
             creationDate :res.creationDate ,
             modificationDate :res.modificationDate ,
           })
         this.userForm.disable()
          console.log(res);
        },
        error:(err)=>{
        console.log(err);
        this._ToastrService.error('Error in loading your Profile ')
        } ,
        complete:()=>{
        this._ToastrService.success(`WellCome in your Profile `) ;

        }
      })
    }


    onEdit(form:any){
       this.isEditMode = true
       this.userForm.get('userName')?.enable();
       this.userForm.get('phoneNumber')?.enable();
       this.userForm.get('email')?.enable();
       this.userForm.get('country')?.enable();
       this.userForm.get('confirmPassword')?.enable();
    }


    onUpdatingCurrentUser(form:any){

      let formValues = form.value
      const myFormData = new FormData();
      myFormData.append('userName', formValues['userName'])
      myFormData.append('email', formValues['email'])
      myFormData.append('country', formValues['country'])
      myFormData.append('phoneNumber', formValues['phoneNumber'])
      myFormData.append('imagePath', formValues['imagePath'])
      myFormData.append('confirmPassword', formValues['confirmPassword'])


      this._ProfileService.onUpdatingCurrentUser(myFormData).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        this._ToastrService.error(` Error in updating your data`) ;
        } ,
        complete:()=>{
        this._ToastrService.success(`Your data updated successFully `) ;

        }
      })
    }



// -----------------
// Send Data To Navbar
@Output() dataToParent = new EventEmitter<any>();  // Using 'any' type for an object
sendDataToParent() {
  const data = {
    userName:this.userForm.get('userName')?.value ,
    // count: 5,
    // status: true
  };
  this.dataToParent.emit(data);  // Emit the object containing multiple data points
}



}
