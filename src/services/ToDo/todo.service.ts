import { AxiosPromise } from 'axios';

import { ITodoItem } from '@/models';

import { baseAPI } from '../api';

import { IToDoService } from './itodo.service';

export class ToDoService implements IToDoService {
  private API = baseAPI;

  public getToDoList = (): AxiosPromise<ITodoItem[]> =>
    this.API({
      url: '',
      method: 'get'
    });

  public createToDoItem = (description: string): AxiosPromise<ITodoItem> =>
    this.API({
      url: '',
      method: 'post',
      data: {
        description
      }
    });

  public completeToDoItem = (id: string): AxiosPromise<boolean> =>
    this.API({
      url: 'complete',
      method: 'put',
      data: {
        id
      }
    });

  public deleteAllCompletedToDoItem = (): AxiosPromise<ITodoItem[]> =>
    this.API({
      url: 'deleteAll',
      method: 'delete'
    });
}
