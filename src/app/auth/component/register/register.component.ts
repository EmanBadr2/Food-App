import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators , AbstractControl} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { regexValidator } from './validators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private  _AuthService:AuthService, private  _toastr: ToastrService,
    private _Router:Router ){}
  //
  isHide:boolean = true
   relativePath:any =''
// form
 registerForm  = new FormGroup({
    userName: new FormControl(null , [Validators.required ,Validators.minLength(3) , Validators.maxLength(12)]) ,
     email : new FormControl(null , [Validators.required , Validators.email]) ,
    country : new FormControl(null , [Validators.required ,Validators.minLength(3) , Validators.maxLength(9)]) ,
    profileImage:new FormControl(null),
    phoneNumber : new FormControl(null , [Validators.required ,regexValidator(/^01[0-2-1-5]\d{1,8}$/)  ]) ,
    password: new FormControl(null ,
       [Validators.required , regexValidator( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)]) ,
    confirmPassword :new FormControl(null ,
       [Validators.required , regexValidator( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/) ]) ,
  } , this.rePassWordMatch);
// -----------
 // get formControl name  to make code more readable
 get userName()    {return this.registerForm.get('userName')}
 get email()        { return this.registerForm.get('email') }
 get country()      { return this.registerForm.get('country') }
 get phoneNumber()   { return this.registerForm.get('phoneNumber') }
 get password()       { return this.registerForm.get('password') }
 get confirmPassword() { return this.registerForm.get('confirmPassword') }
 get profileImage() { return  this.registerForm.get('profileImage') }

// ----------------------

// syntax fun to match  pass && repass
rePassWordMatch(myForm:AbstractControl): null| { [key:string ] : string }{
  let passValue = myForm.get('password')?.value ;
  let rePassValue = myForm.get('confirmPassword')?.value ;
  if (passValue === rePassValue) {  return null }
  else {
    myForm.get('confirmPassword')?.setErrors({passMatch : 'password and confirmPassword not match'})
    return {passMatch : 'password and confirmPassword not match'}
  }
}
// ------------------
// Handel Register
  sendData(registerForm:FormGroup){
    console.log( 'As Reactive Form ', registerForm);

    let  objectToFormData = registerForm.value
    const formData = new FormData();
    for (const key in objectToFormData) {
      if (objectToFormData.hasOwnProperty(key)) { formData.append(key, objectToFormData[key]) }
    }
    // OR
    // Object.entries(objectToFormData).forEach(([key, value]) => { formData.append(key, value) });
    console.log('As Form Data ',  formData )
    
    this._AuthService.register(formData).subscribe({
      next :(res:any)=> {
         console.log(res);
       } ,
       error :(err:any)=> {
        console.log(err);
        this._toastr.error(err.error.message , 'Error ')
       } ,
      complete :()=> {
        this._toastr.success('YouR Logging is ', 'Success');
        this._Router.navigate(['/auth']) ;
       } ,
     })

  }




// -----------------------------------------------------------------------------
  // // Handle file drop

  public files: any | NgxFileDropEntry[] = [];
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.registerForm.value.profileImage = this.files[0]

           this.relativePath =JSON.stringify( droppedFile.relativePath)
          console.log( this.relativePath);
          console.log(droppedFile.relativePath, file);
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
          // Headers
          const headers = new HttpHeaders({ 'security-token': 'mytoken' })
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo',
          //  formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => { // Sanitized logo returned from backend})
          **/
        });
      } else { // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      } }
    this.registerForm.value.profileImage = this.files[0]
  }
  public fileOver(event:any){console.log(event);}
  public fileLeave(event:any){console.log(event);}
}

