import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';
import { publicDecrypt } from 'crypto';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'todo-list';
  tasks = [
    "Visit Ann",
    "Call Dad",
    "Go to the gym",
    "Wash the dishes",
    "Shop for the party"]

  add (newTask:string){
    this.tasks.push(newTask)
  }

  remove(existingTask:string){
   var userConfirmed =  confirm('Are you sure, "${existingTask}"');
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask); 
    }
  }

  markAsDone(task:string){
    alert('The task:"' + task + '" is done')
  }
}

class Task {
  constructor(public title :string){
  }
}