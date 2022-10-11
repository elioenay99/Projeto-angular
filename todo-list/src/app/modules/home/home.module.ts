import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
