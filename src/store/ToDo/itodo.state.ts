import { ITodoItem } from '@/models';

export interface ITodoState {
  todoList: ITodoItem[];
  nextToDoItemId: number;
}
