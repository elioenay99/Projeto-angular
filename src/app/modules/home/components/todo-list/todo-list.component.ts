import { TaskList } from './../../../../module/home/model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() {}

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm(
      'Você deseja realmente deletar toda as tarefas??'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  public validateInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa vazia, deseja deletar ela??');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
