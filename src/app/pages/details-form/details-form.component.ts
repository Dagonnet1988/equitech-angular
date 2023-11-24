import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { formRequest } from 'src/app/interfaces/forms.interfaces';
import { formService } from 'src/app/services/forms.service';

@Component({
  selector: 'pages-details',
  templateUrl: './details-form.component.html',
  styles: [
  ]
})
export class DetailsFormComponent implements OnInit{

  public form?: formRequest

  constructor(
    private formService: formService,
    private activateRoute: ActivatedRoute,
    private router:Router
    ) {}


  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.formService.getFormById( id ) )
    ).subscribe(form => {
      if(!form ) return this.router.navigate(['/list']);

      this.form = form;
      return;

    })
  }
}
