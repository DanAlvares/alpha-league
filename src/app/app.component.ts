import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`main{padding-bottom: 2rem}`]
})
export class AppComponent {}
