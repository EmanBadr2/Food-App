
export interface ICategory{
   pageNumber : number,
   pageSize : number,
    totalNumberOfRecords: number ,
    totalNumberOfPages: number ,
   data : ICategoriesData[] ,
}

export interface ICategoriesData {
      id?:number ;
      name: string ;
      creationDate: Date ;
      modificationDate : Date ;
}

export interface getCategoryParams {
  name ?: string ,
  pageSize:number ,
  pageNumber: number ,
}

// ----
export interface DialogData {
  animal: string;
  name: string;
}
