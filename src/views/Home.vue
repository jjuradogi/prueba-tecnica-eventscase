<template>
  <div class="home-container container-fluid justify-content-center align-items-center">
    <div>
      <add-todo />
      <todo-list :todo-list="todoList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import { ITodoItem } from '@/models';

import AddToDo from '@/components/ToDo/AddToDo/AddToDo.component.vue';
import ToDoList from '@/components/ToDo/ToDoList/ToDoList.component.vue';

@Component({
  components: {
    'todo-list': ToDoList,
    'add-todo': AddToDo
  }
})
export default class Home extends Vue {
  @State(state => state.todo.todoList) todoList!: ITodoItem[];

  @Action('todo/getToDoList')
  private getToDoList!: () => Promise<void>;

  async getData(): Promise<void> {
    await this.getToDoList();
  }

  async mounted(): Promise<void> {
    await this.getData();
  }
}
</script>

<style lang="scss">
.home-container {
  height: 100%;
  display: flex;
}
</style>
