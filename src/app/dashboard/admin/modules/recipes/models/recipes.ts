
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


