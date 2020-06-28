import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
