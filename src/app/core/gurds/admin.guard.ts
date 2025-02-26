import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor( private _Router:Router , private _AuthService:AuthService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this._AuthService.userToken !== null && this._AuthService.userGroup== 'SuperAdmin' ) {
         return true;
      }
      else{
        this._Router.navigate(['/auth'])
        return false
      }


  }

}
