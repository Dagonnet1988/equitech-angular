import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';



@NgModule({

  imports: [
    CommonModule,

  ],
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    PanelModule,
    PasswordModule,
    TableModule

  ]
})
export class PrimeNgModule { }
