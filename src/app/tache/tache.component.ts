import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  tache: string = '';
  description: string = '';
  tasks: { name: string; description: string; completed: boolean }[] = [];
  showCompleted: boolean = false;

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask(): void {
    if (this.tache && this.description) {
      this.tasks.push({ name: this.tache, description: this.description, completed: false });
      this.saveTasks();
      this.tache = '';
      this.description = '';
    }
  }

  saveTasks(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  loadTasks(): void {
    if (typeof localStorage !== 'undefined') {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }
  }

  toggleCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  toggleShowCompleted(): void {
    this.showCompleted = !this.showCompleted;
  }

  getFilteredTasks() {
    return this.showCompleted ? this.tasks.filter(task => task.completed) : this.tasks;
  }
}
