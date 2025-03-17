
export interface IRecipes {
  pageNumber: number,
  pageSize: number,
  totalNumberOfRecords: number,
  totalNumberOfPages: number ,
  data: IRecipesData[]   ,
}

export interface IRecipesData  {
  id:number ,
  name: string ,
  imagePath :string ,
  description :string ,
  price :number ,
  creationDate: Date ,
  modificationDate : Date ,
  category : ICategoriesAndTags[ ] ,
  tag : ICategoriesAndTags ,
}


export interface ICategoriesAndTags{
  id:number ;
  name: string ;
  creationDate: Date ;
  modificationDate : Date ;
}


// ----------------------------------------

export interface IAllFav {
  pageNumber: number,
  pageSize: number,
  totalNumberOfRecords: number,
  totalNumberOfPages: number ,
  data: IFavRecipe[]   ,
}

export interface IFavRecipe {
id : number ,
creationDate :Date ,
modificationDate :Date ,
recipe :IRecipesData ;
user?:{id: Number} ,
}




