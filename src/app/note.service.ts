import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Note } from './note';



@Injectable({
  providedIn: "root"
})
export class NoteService {
  private notesUrl = "https://thesepehrm.com/wice/notes/all/limit/30";
  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http
      .get<Note[]>(this.notesUrl)
      .pipe(catchError(this.handleError("getNotes", [])));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
