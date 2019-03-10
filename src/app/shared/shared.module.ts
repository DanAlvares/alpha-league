import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list/players-list.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PlayersListComponent, ModalComponent],
  exports: [PlayersListComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
