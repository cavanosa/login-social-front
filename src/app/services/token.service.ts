import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  logOut(): void {
    sessionStorage.clear();
  }
}
