import { AxiosPromise } from 'axios';

import { ITodoItem } from '@/models';

export interface IToDoService {
  getToDoList(): AxiosPromise<ITodoItem[]>;

  createToDoItem(description: string): AxiosPromise<ITodoItem>;

  deleteToDoItem(id: string): AxiosPromise<boolean>;

  completeToDoItem(id: string): AxiosPromise<boolean>;

  deleteAllCompletedToDoItem(): AxiosPromise<ITodoItem[]>;
}
