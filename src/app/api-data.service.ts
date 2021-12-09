import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from "rxjs";

const endpoint="https://rickandmortyapi.com/api/character/?page=";

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: string[];
  location?: string[];
  image?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  // Set HttpClient
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any{
    if (error.error instanceof ErrorEvent) {
      console.log('An erro occurred:', error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      )
      return  throwError("Something bad happened; please try again later.");
    }
  }
  
  // Get all characters data from API
  getCharacters(id:number): Observable<any> {
    return this.http.get<Character>(endpoint+id).pipe(
      catchError(this.handleError)
    );
  }
}
