import { Component, OnInit } from '@angular/core';
import { TodosListServiceService } from '../../service/todos-list-service.service';
import { IItem } from 'src/app/todoItem.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(private service:TodosListServiceService) {
    //this.users = [];
  }

  users : Array<any>;

clicks:number = 0;
id:number;
userstring:string;

onChanged(increased:any){
    increased==true?this.clicks++:this.clicks--;
}

onRemove(idelement:any){ 
  console.log(this.users[idelement]);
  console.log(idelement.id);
  this.id = idelement.id;

  for(var i = 0;i < this.users.length; i++){
    if(idelement.id == this.users[i].id){
      this.users.splice(i,1);
        break;
    }
}
  //this.users.splice(idelement.id,1);

  this.userstring = JSON.stringify(idelement);
}

  ngOnInit() {
     /* this.service.getList().subscribe(
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
