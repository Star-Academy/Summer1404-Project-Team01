import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);


  private readonly configUrl = 'http://localhost:5226/auth/config';
  private readonly checkStatusUrl = 'http://localhost:5226/api/auth/profile';

  private readonly _isLoggedIn = new BehaviorSubject<boolean>(false);
  public readonly isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {
    this.checkAuthStatus().subscribe();
  }


  public login(): void {
    this.http.get<{ loginUrl: string }>(this.configUrl)
      .subscribe({
        next: (response) => {
          window.location.href = response.loginUrl;
        },
        error: (err) => {
          console.error('Could not get login URL from backend', err);
        }
      });
  }

  public checkAuthStatus(): Observable<boolean> {
    return this.http.get(this.checkStatusUrl).pipe(
      map(() => true),
      catchError(() => of(false)),
      tap(isLoggedIn => this._isLoggedIn.next(isLoggedIn))
    );
  }


  public logout(): void {
    this._isLoggedIn.next(false);
  }
}
