import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule} from  '@fortawesome/angular-fontawesome'
import { Tarefa } from '../../models/Tarefa';
import {faTimes} from '@fortawesome/free-solid-svg-icons'


 
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); //envia a tarefa deletada

  faTimes = faTimes

  onDelete(tarefa : Tarefa){
    this.onDeleteTask.emit(tarefa);
  }

}
