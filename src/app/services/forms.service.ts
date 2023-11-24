import { Observable, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formRequest } from '../interfaces/forms.interfaces';

@Injectable({providedIn: 'root'})
export class formService {
  constructor(private http: HttpClient) { }
  private urlBase = "http://localhost:3000"

  getForm (): Observable<formRequest[]> {
    return this.http.get<formRequest[]>(`${this.urlBase}/forms`);
  }

  getFormById ( id: string): Observable<formRequest| undefined> {
    return this.http.get<formRequest>(`${this.urlBase}/forms/${id}`)
    .pipe(
      catchError ( error => of(undefined) )
    );
  }

  addForm (form: formRequest): Observable<formRequest>{
    return this.http.post<formRequest>(`${this.urlBase}/forms`, form)
  }

  deleteForm (form: formRequest): Observable<formRequest>{
    return this.http.patch<formRequest>(`${this.urlBase}/forms/${form.id}`, form)

  }

}
