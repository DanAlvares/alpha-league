import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../api/api.service';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Players } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerResolver implements Resolve<Players> {

  constructor(private apiService: ApiService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Players> {
    if (this.apiService.players) { return of(this.apiService.players); }

    return this.apiService.getPlayers({})
      .pipe(map((players: Players) => players));
  }
}
