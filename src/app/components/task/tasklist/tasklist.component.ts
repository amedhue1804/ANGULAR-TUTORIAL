import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TaskListComponent {
  taskList: Task[] = [
    new Task(1, "Implementar autenticación", "Configurar autenticación de usuarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false),
    new Task(2, "Diseñar interfaz de usuario", "Crear diseño para la interfaz principal", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-10-15"), new Date("2024-12-01"), false),
    new Task(3, "Desarrollar API", "Implementar API REST para los datos de la app", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-05"), new Date("2024-10-25"), false),
    new Task(4, "Actualizar documentación", "Revisar y actualizar la documentación", TaskPriority.LOW, TaskStatus.PENDING, new Date("2024-11-05"), new Date("2024-11-15"), false),
    new Task(5, "Crear pruebas unitarias", "Escribir pruebas unitarias para la API", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date("2024-09-20"), new Date("2024-12-01"), false),
    new Task(6, "Configurar CI/CD", "Configurar integración y despliegue continuo", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-01"), new Date("2024-10-20"), true),
    new Task(7, "Optimizar rendimiento", "Mejorar el rendimiento de la aplicación", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-10-10"), new Date("2024-11-10"), false),
    new Task(8, "Realizar pruebas de carga", "Ejecutar pruebas de carga en la API", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-11-02"), new Date("2024-11-30"), false),
    new Task(9, "Configurar notificaciones", "Configurar sistema de notificaciones push", TaskPriority.LOW, TaskStatus.IN_PROGRESS, new Date("2024-09-30"), new Date("2024-10-15"), true),
    new Task(10, "Desplegar en producción", "Realizar el despliegue de la aplicación", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-05"), new Date("2024-10-25"), false),
  ];
  TaskPriority = TaskPriority;
  TaskStatus = TaskStatus;

  increasePriority(task: Task) {
    if (task.priority === TaskPriority.LOW) task.priority = TaskPriority.MEDIUM;
    else if (task.priority === TaskPriority.MEDIUM) task.priority = TaskPriority.HIGH;
  }
  
  decreasePriority(task: Task) {
    if (task.priority === TaskPriority.HIGH) task.priority = TaskPriority.MEDIUM;
    else if (task.priority === TaskPriority.MEDIUM) task.priority = TaskPriority.LOW;
  }
  
  startTask(task: Task) {
    task.status = TaskStatus.IN_PROGRESS;
  }
  
  completeTask(task: Task) {
    task.status = TaskStatus.COMPLETED;
  }
  
  resetTask(task: Task) {
    task.status = TaskStatus.PENDING;
  }

  editTask(task: Task) {
    console.log('Editando tarea', task);
  }
  
  deleteTask(task: Task) {
    task.isDelete = true; 
  }

}