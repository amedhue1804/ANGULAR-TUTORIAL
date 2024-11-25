import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskresumeComponent } from '../taskresume/resume.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'] 
})

export class TaskformComponent {

formTaskEdit:FormGroup;

constructor(formBuilder:FormBuilder){
  this.formTaskEdit=formBuilder.group({
    'name': ['',[Validators.required]],
    'description': ['',[Validators.required]],
    'priority': ['',[Validators.required]],
    'expirationDate': ['',[Validators.required]]
  })
}

onSubmit():void{
if(this.formTaskEdit.valid ){
  console.log(this.formTaskEdit.value)
}else{
  console.log(`El formulario tiene errores: ${this.formTaskEdit.get('name')?.errors}`)
}
}}