import { Component,OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
constructor(){}

ngOnInit(): void{}

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
 let userConfirmed =  confirm('Are you sure, "${existingTask.title}"');
  if(userConfirmed){
    this.tasks = this.tasks.filter(task => task != existingTask); 
  }
}
}

class Task {
constructor(public title :string){
}

toggleIsDone(){
  this.isDone = !this.isDone
}
public isDone =false
}
