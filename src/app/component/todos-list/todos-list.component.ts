import { Component, OnInit } from '@angular/core';
import { TodosListServiceService } from '../../service/todos-list-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(private service:TodosListServiceService) {
   
  }
users : string[];

 
  ngOnInit() {
      /*this.service.getList().subscribe(
            v => console.log(
                v.map(user=>user)      
            ), 
           list =>{this.users=list}
       ); */
       
       this.service.getList().subscribe(       
       list =>{this.users=list}
   );  
  
  }

 

    

 

}
