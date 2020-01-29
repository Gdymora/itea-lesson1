import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent{

  @Input() user: string;  

  @Output() onChanged = new EventEmitter<boolean>();

  change(increased:any) {
      this.onChanged.emit(increased);
  }

  @Output() onRemove = new EventEmitter<boolean>();

  del(idelement:any) {
      this.onRemove.emit(idelement);
  }
}
