import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefa';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
     TaskItemComponent,
    ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = [];
  
  constructor(private taskService: TaskService){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe({
      next:(data) => {
        this.tarefas = data; //Quando a API retorna os dados, eles são armazenados no array tarefas
        console.log(data)
      },
      error:(err) =>{
        console.error('Erro ao buscar tarefas',err);//Caso ocorra algum erro na requisição
      }
    });

  }

  deleteTask(tarefa:Tarefa){
    this.taskService.deleteTask(tarefa).subscribe({
      next:() => {
        //se a deleção for bem sucedida, removemos a tarefa da lista
        this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
        alert('Tarefa deletada com sucesso!');
      },
      error: (err) =>{
        console.error ('Erro ao deletar a tarefa:', err);
        alert('Ocorreu um erro ao tentar deletar a tarefa. Tente novamente');
      }
    });
  }

}
