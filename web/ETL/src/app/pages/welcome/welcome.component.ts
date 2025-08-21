import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-pages',
  standalone:true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  private authService = inject(AuthService);


  public login(): void {
    this.authService.login();
  }

}
