import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`main{padding-bottom: 2rem}`]
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.getGames({})
    .pipe(map(res => res.data))
    .subscribe(games => this.apiService.games = games);
  }
}
