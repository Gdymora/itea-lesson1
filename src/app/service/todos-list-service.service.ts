import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodosListServiceService {

  constructor(private http:HttpClient) { }


  getList() : Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/todos/')
   .pipe(map(
            function(response:Response) {
              return response;
            }
      )
     );

  }

}
