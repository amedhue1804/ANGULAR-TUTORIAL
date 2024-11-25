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
 this.eventTaskModify.emit(new TaskEvent("increasePriority", task))
}

decreasePriority(task: any) {
  this.eventTaskModify.emit(new TaskEvent("decreasePriority", task))

}

startTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("startTask", task))

}

completeTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("completeTask", task))
}

resetTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("completeTask", task))
}
editTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("editTask", task))
}

deleteTask(task: any) {
  this.eventTaskModify.emit(new TaskEvent("deleteTask", task))
}

}