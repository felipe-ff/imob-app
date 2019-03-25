import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) {
    this.setLocation();
  }

  baseUrl;
  baseUrlApi;

  setLocation() {
    //const port = isDevMode() ? '8081' : '';
    //const url = isDevMode() ? 'http://localhost:' : 'https://imobiliaria-db.appspot.com';
    const url = 'https://imobiliaria-db.appspot.com';
    const port = '';
    this.baseUrlApi = url + port + '/api/books';
    this.baseUrl = url + port;
  }

  getBooks(filters) {
    console.log(filters);
    return this.http.get<any>(this.baseUrlApi + '/filters/' + JSON.stringify(filters));
  }

  login(user) {
    return this.http.post(this.baseUrlApi + '/login', user);
    //return this.http.get<any>(this.baseUrl + '/auth/login');
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrlApi + '/' + id);
  }

  getBookById(id: number) {
    return this.http.get<any>(this.baseUrlApi + '/' + id);
  }

  addBook(formData) {
    return this.http.post(this.baseUrl + '/books/add', formData);
  }

  updateBook(id, formData) {
    return this.http.put<any>(this.baseUrlApi + '/' + id, formData);
  }
}
