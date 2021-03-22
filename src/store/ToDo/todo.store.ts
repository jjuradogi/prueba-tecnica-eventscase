import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { inject } from 'inversify-props';
import { find, filter } from 'lodash';

import { store } from '@/store';

import { IToDoService } from '@/services';
import { ITodoItem } from '@/models';

import { ToDoMutationTypes } from './todo.mt';

import todoListJSON from '../todoList.json';

@Module({ name: 'todo', dynamic: true, namespaced: true, store })
export class ToDo extends VuexModule {
  @inject('toDoService') private toDoService!: IToDoService;

  todoList: ITodoItem[] = [];

  nextToDoItemId = 0;

  @Action
  public async getToDoList(): Promise<void> {
    try {
      /**
       * Si esto fuera una llamada real, crearía una variable local llamada "response" donde haría
       * un "await this.toDoService.getToDoList()" y después de comprobar que el status del response
       * es 200, lo almacenaría en el estado o bien lo devolvería si no me interesa almacenarlo en el store
       */
      const response = todoListJSON;

      this.context.commit(ToDoMutationTypes.SET_TODO_LIST, response);

      const nextTodoItemId = parseInt(response[response.length - 1].id, 10) + 1;

      this.context.commit(ToDoMutationTypes.SET_NEXT_TODO_ITEM_ID, nextTodoItemId);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action
  public async createToDoItem(description: string): Promise<void> {
    try {
      /**
       * Si esto fuera una llamada real, crearía una variable local llamada "response" donde haría
       * un "await this.toDoService.createToDoItem(description)" y después de comprobar que el status del response
       * es 200, lo almacenaría en el estado o bien lo devolvería si no me interesa almacenarlo en el store
       */
      const newToDoItem: ITodoItem = {
        id: this.nextToDoItemId.toString(),
        description,
        isChecked: false
      };

      this.context.commit(ToDoMutationTypes.ADD_TODO_ITEM, newToDoItem);
      this.context.commit(ToDoMutationTypes.SET_NEXT_TODO_ITEM_ID, this.nextToDoItemId + 1);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action
  public completeToDoItem(id: string): boolean {
    try {
      /**
       * Si esto fuera una llamada real, crearía una variable local llamada "response" donde haría
       * un "await this.toDoService.completeToDoItem(id)" y después de comprobar que el status del response
       * es 200, lo almacenaría en el estado o bien lo devolvería si no me interesa almacenarlo en el store
       */
      this.context.commit(ToDoMutationTypes.CHECK_TODO_ITEM, id);

      return true;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action
  public async deleteAllCompletedToDoItem(): Promise<void> {
    try {
      /**
       * Si esto fuera una llamada real, crearía una variable local llamada "response" donde haría
       * un "await this.toDoService.deleteAllCompletedToDoItem()" y después de comprobar que el status del response
       * es 200, lo almacenaría en el estado o bien lo devolvería si no me interesa almacenarlo en el store
       */

      const response = filter(this.todoList, (todo: ITodoItem) => !todo.isChecked);

      this.context.commit(ToDoMutationTypes.SET_TODO_LIST, response);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation
  public setToDoList(todoList: ITodoItem[]): void {
    this.todoList = todoList;
  }

  @Mutation
  public setNextToDoItemId(nextTodoItemId: number): void {
    this.nextToDoItemId = nextTodoItemId;
  }

  @Mutation
  public addToDoItem(newToDoItem: ITodoItem): void {
    this.todoList.push(newToDoItem);
  }

  @Mutation
  public checkToDoItem(id: string): void {
    const foundToDoItem = find(this.todoList, todoItem => todoItem.id === id);

    if (foundToDoItem) foundToDoItem.isChecked = !foundToDoItem.isChecked;
  }

  get shouldEnableDeleteAllCheckedToDoItem(): boolean {
    const foundAnyCheckedToDo = find(this.todoList, todo => todo.isChecked);

    return !!foundAnyCheckedToDo;
  }
}

export const todoStore = {
  build: (): ToDo => getModule(ToDo)
};
