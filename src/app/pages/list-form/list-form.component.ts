import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formRequest } from 'src/app/interfaces/forms.interfaces';
import { formService } from 'src/app/services/forms.service';

@Component({
  selector: 'pages-list',
  templateUrl: './list-form.component.html',
  styles: [
  ]
})
export class ListFormComponent implements OnInit {

  public forms: formRequest[] = [];

  constructor(
    private formService: formService,
    private router: Router,
    ){};

  deleteForm(form: formRequest){
    this.formService.deleteForm({...form, view:false})
    .subscribe( () => {
        window.location.reload();
      }
    );
  };

  ngOnInit(): void {
    this.formService.getForm()
    .subscribe( forms => this.forms = forms);
  };
}

