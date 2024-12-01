import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {customValidator, customValidatorPriority} from './taskform.validators';
import {Task, TaskStatus} from '../../../models/task.models';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent implements OnChanges, OnInit {

  @Input()
  taskToEdit: Task | null = null; 
  @Output()
  saveTask = new EventEmitter<Task>(); 
  @Output()
  addTask = new EventEmitter<Task>(); 

  formTaskEdit: FormGroup

  constructor(private route: ActivatedRoute, formBuilder: FormBuilder) {
    this.formTaskEdit = formBuilder.group({
      'name': ['', [Validators.required, Validators.maxLength(50)]],
      'description': ['', [Validators.required, Validators.maxLength(255)]],
      'priority': ['', [Validators.required, customValidatorPriority()]],
      'expirationDate': ['', [Validators.required, customValidator()]],

    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id')
      console.log(id)
    })
  }

  onSubmit() {
    if (this.formTaskEdit.valid) {
      if (this.taskToEdit) {
        const updatedTask: Task = {
          ...this.taskToEdit,
          ...this.formTaskEdit.value,
          expirationDate: new Date(this.formTaskEdit.value.expirationDate),
        };
        this.saveTask.emit(updatedTask); 
      } else {
        const newTask: Task = new Task(
          Math.floor(Math.random() * 1000000), 
          this.formTaskEdit.value.name,
          this.formTaskEdit.value.description,
          this.formTaskEdit.value.priority,
          TaskStatus.PENDING,
          new Date(this.formTaskEdit.value.expirationDate),
          new Date(), 
          false
        );
        this.addTask.emit(newTask); 
      }

      this.formTaskEdit.reset(); 
    } else {
      console.log('El formulario tiene errores:', this.formTaskEdit.errors);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.formTaskEdit.patchValue({
        name: this.taskToEdit.name,
        description: this.taskToEdit.description,
        priority: this.taskToEdit.priority,
        expirationDate: this.taskToEdit.expirationDate.toISOString().slice(0, 16),
      });
    } else {
      
      this.formTaskEdit.reset();
    }
  }

}