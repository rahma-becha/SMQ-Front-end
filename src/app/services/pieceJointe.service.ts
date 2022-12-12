import { HttpClient , HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { PieceJointe } from '../model/pieceJointe';

@Injectable({
    providedIn: 'root'
})
export class PieceJointeService {
    private apiServerUrl=environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

     // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.apiServerUrl}/pieceJointe/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

   // define function to download files
   download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.apiServerUrl}/pieceJointe/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
}