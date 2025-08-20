import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pages',
  standalone:true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  private http = inject(HttpClient);

  public login(): void{
    const backEndLoginUrl = 'http://localhost:8080';

    this.http.get<{ loginUrl: string }>(backEndLoginUrl).subscribe({
      next:(response) => {
        window.location.href = response.loginUrl;
      },
      error:(err) => {
        console.error('Could not get login URL from backend', err);
      }
    })
  }

}
