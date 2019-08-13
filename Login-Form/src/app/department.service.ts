import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from './idepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url : string = "/assets/data/department.json"

  constructor( private http: HttpClient) { }

  public getJson() : Observable<IDepartment[]>
  {
    return this.http.get<IDepartment[]>(this.url);
  }

}
