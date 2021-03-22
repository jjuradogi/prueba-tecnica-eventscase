import { container } from 'inversify-props';
import { IToDoService } from './itodo.service';
import { ToDoService } from './todo.service';

const toDoContainer = (): void => {
  container.addTransient<IToDoService>(ToDoService, 'toDoService');
};

export const toDoServiceModule = {
  build: toDoContainer
};
