import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players-listing/players-listing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule
  ],
  exports: [PlayersComponent],
})
export class PlayersModule { }
