import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { formRequest } from 'src/app/interfaces/forms.interfaces';
import { formService } from 'src/app/services/forms.service';

@Component({
  selector: 'pages-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {
  public newForm = new FormGroup({
    name:         new FormControl(''),
    lastName:     new FormControl(''),
    documentT:    new FormControl(''),
    id:           new FormControl(''),
    gender:       new FormControl(''),
    birthdate:    new FormControl(''),
    age:          new FormControl(''),
    address:      new FormControl(''),
    city:         new FormControl(''),
    neighborhood: new FormControl(''),
    view:         new FormControl(true),

  })

  public tDocument = [
    {id: 'cédula de ciudadanía', desc: 'C.C.'},
    {id: 'cédula de extranjería', desc: 'C.E.'},
    {id: 'Pasaporte', desc: 'Pasaporte'},

  ];
  get currentForm(): formRequest {
    const form =  this.newForm.value as formRequest;
    return form
  }

  onSubmit(): void{
    this.newForm.markAllAsTouched();
    if(this.newForm.invalid) return;

    if(this.currentForm){
      this.formService.addForm(this.currentForm)
      .subscribe(
         () => {
          this.router.navigate(['/list']);
          this.showSnackbar('Nuevo formulario creado.')
         }
      )


    }



  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }


  constructor(
    private formService: formService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    ){ }

}
