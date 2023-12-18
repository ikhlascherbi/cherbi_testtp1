// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/internal/Observable";
import {Stagiaire} from "../stagiaire";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class StagiaireCrudService {

  private url="http://localhost:8085/stagiaires";
  private http: any;

  constructor(private  httpClient:HttpClient) { }
  getAllStg():Observable<Stagiaire[]>{
    return this.httpClient.get<Stagiaire[]>(`${this.url}/etatPresence`);
  }
  AddStg(stagiaire: Stagiaire):Observable<Stagiaire>{
    return this.httpClient.post<Stagiaire>(this.url,stagiaire);
  }
  updateStg(id:number, stagiaire:Stagiaire):Observable<Stagiaire>{
    return this.httpClient.put<Stagiaire>(this.url+"/"+id,stagiaire);
  }
  deleteStg(id:number):Observable<string>{
    return this.httpClient.delete<string>(this.url+"/"+id);
  }
  getStg(id:number):Observable<Stagiaire>{
    return this.httpClient.get<Stagiaire>(this.url+"/"+id);
  }
  performRandomAssignment(): Observable<any> {

    // @ts-ignore
    return this.http.post<any>('http://localhost:8085/stagiaires/performRandomAssignment', {});
  }
}
