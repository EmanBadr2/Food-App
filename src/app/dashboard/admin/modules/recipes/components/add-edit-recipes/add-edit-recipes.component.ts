import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { Router  , ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-add-edit-recipes',
  templateUrl: './add-edit-recipes.component.html',
  styleUrls: ['./add-edit-recipes.component.scss']
})
export class AddEditRecipesComponent implements OnInit  {

  tagList:any =[] ;
  categoriesList:any =[] ;
  activeRecipeID:null|number =0 ;
  isEditMode : boolean = false;
  isViewMode : boolean = false ;
  isFormDisabled: any ;
 recipeForm : FormGroup = new FormGroup({
    id  : new FormControl('' ) ,
    name: new FormControl('' ) ,
    description :  new FormControl('' ) ,
    price :  new FormControl('' ),
    tagId : new FormControl('' ) ,
    categoriesIds: new FormControl('' ) ,   //option
    recipeImage :  new FormControl('' ) ,
  })

 constructor( private _RecipesService:RecipesService ,
    private _HelperService:HelperService ,
    private _ToastrService:ToastrService ,
    private _Router:Router ,
    private _ActivatedRoute:ActivatedRoute )
  {
     this.activeRecipeID =Number(this._ActivatedRoute.snapshot.paramMap.get('id') )
     this.isFormDisabled = this._ActivatedRoute.snapshot.paramMap.get('formDisabled')
  }

  ngOnInit(): void {
    this.onGettingTags() ;
    this.onGettingAllCategories() ;

     // pass Data to Form (View & Edit)
    if(this.activeRecipeID){
      this.onGettingRecipeById(this.activeRecipeID)
    }
    // View Mode
    if( this.isFormDisabled == 'true' ){ this.isViewMode= true }
    if(this.isViewMode){ this.recipeForm.disable()  }
    // Edit Mode
    if(this.activeRecipeID && this.isFormDisabled == null){ this.isEditMode= true }

  }


 //----------------
  onSubmitRecipeForm(form:any){
    let formValues = form.value
    const myFormData = new FormData();
    for(const key in formValues){
      if (formValues.hasOwnProperty(key)) {  myFormData.append(key, formValues[key]) }
    }
    if(this.files.length>0){
     myFormData.append('recipeImage' , this.files[0])
    }

    if(!this.activeRecipeID && !this.isEditMode){
      this.onAddingRecipe(myFormData)
    }else{
      this.onUpdateRecipe(this.activeRecipeID , myFormData)
    }

  }

  onGettingRecipeById(id:null |number){
    this._RecipesService.onGettingRecipeById(id).subscribe({
      next:(res)=>{
// ---------
        // console.log(res);
        // let imgPath = res.imagePath
        // let mainImgPath:string = 'https://upskilling-egypt.com:3006/'+imgPath
        // console.log(mainImgPath);
// -----
        this.recipeForm.patchValue({
           name:res.name ,
           description : res.description ,
           price : res.price,
           tagId :res.tag?.id ,
           categoriesIds:res.category.map((cat)=> cat.id) ,
          //  recipeImage :
          }
        );


      } ,
      error:(err)=>{
        console.log(err);
      } ,
      complete:()=>{
      },
    })
  }
  onAddingRecipe(myFormData:FormData):void{
    this._RecipesService.onAddingRecipe(myFormData).subscribe({
      next:(res)=>{
      } ,
      error:(err)=>{
        console.log(err);
        this._ToastrService.error('Error in Adding Recipe ')
      } ,
      complete:()=>{
        this._ToastrService.success('You have added a new Recipe ') ;
        this._Router.navigate(['/dashboard/admin/recipes'] ) ;
      },
    })
  }
  onUpdateRecipe(id:null|number , myFormData:FormData):void{
    this._RecipesService.onUpdateRecipe(id , myFormData).subscribe({
      next:(res)=>{
      } ,
      error:(err)=>{
        console.log(err);
        this._ToastrService.error('Error in Update Recipe ')
      } ,
      complete:()=>{
        this._ToastrService.success('You have Updated your Recipe ') ;
        this._Router.navigate(['/dashboard/admin/recipes'] ) ;
      },
    })

  }


  onGettingTags():void {
    this._HelperService.onGettingTags().subscribe({
      next:(res)=>{
        this.tagList = res ;
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })
  }
  onGettingAllCategories():void{
    const categoriesParams ={ pageSize:500 ,  pageNumber : 1 }
    this._HelperService.onGettingAllCategories(categoriesParams).subscribe({
      next:(res)=>{
        this.categoriesList= res.data ;
      } ,
      error :()=>{ } ,
      complete :()=>{ } ,
    })

  }





 //---- DropZone
  files: File[] = [];
 onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
 }
 onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
 }
 // ---------



}


