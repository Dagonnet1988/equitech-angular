import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  public activeUser = localStorage.getItem("user");

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Diligenciar formulario',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/form'
            },
            {
                label: 'Lista de formularios',
                icon: 'pi pi-fw pi-ellipsis-v',
                routerLink: '/list'
            }
        ];
    }

  constructor(public loginService: LoginService ){

  }
}
