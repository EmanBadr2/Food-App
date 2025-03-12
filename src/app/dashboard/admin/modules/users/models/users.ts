
export interface IAllUsers{
  pageNumber: number ,
  pageSize : number ,
  data : IUser[] ,
  totalNumberOfRecords: number ,
  totalNumberOfPages: number ,
}

export interface IUser{
  id:number ,
  userName:string ,
  email: string,
  country:string ,
  phoneNumber :number ,
  imagePath:string | null,
  group : IGroup ,
  creationDate: Date ,
  modificationDate :Date  ,
}

export interface IGroup{
  id: Number,        //    1               2
  name: string ,    //   SuperAdmin      SystemUser
  creationDate: Date ,
  modificationDate :Date  ,
}



