import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players-listing/players-listing.component';

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  exports: [PlayersComponent],
})
export class PlayersModule { }
