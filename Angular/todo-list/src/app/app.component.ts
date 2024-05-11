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
  
  tasks : Task[] =[
    new Task ("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
    ]

  add (newTask:string){
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask:Task){
   var userConfirmed =  confirm('Are you sure, "${existingTask}"');
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask); 
    }
  }

  markAsDone(task:Task){
    task.isDone = true
  }
}

class Task {
  constructor(public title :string){
  }

  public isDone =false
}