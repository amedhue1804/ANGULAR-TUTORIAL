import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskEvent } from '../../../models/taskEvent.model';

@Component({
  selector: 'app-taskresume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'] 
})

export class TaskresumeComponent{
  
@Input()
taskinput :Task = new Task(1, "Implementar autenticación", "Configurar autenticación de usuarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false)

@Output()
eventTaskModify = new EventEmitter<TaskEvent>

increasePriority(task: any) {
 this.eventTaskModify.emit(new TaskEvent("increasePriority", task.id))
}

decreasePriority(task: any) {
  this.eventTaskModify.emit(new TaskEvent("decreasePriority", task.id))

}

startTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("startTask", task.id))

}

completeTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("completeTask", task.id))
}

resetTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("completeTask", task.id))
}
editTask(task: any) {
  console.log('Editando tarea', task);
}

deleteTask(task: any) {
  task.isDelete = true; 
}

}