<template>
  <div class="todolist container-fluid">
    <ul class="list-group" v-if="todoList.length > 0">
      <todo-item v-for="todo in todoList" :key="todo.id" :todo-item="todo" />
    </ul>
    <span v-else class="no-data mt-4">No se ha añadido ninguna tarea...</span>
    <button
      type="button"
      class="btn primary-background my-4 delete-completed-button"
      :disabled="!shouldEnableDeleteAllCheckedToDoItem"
      @click="deleteCompleted"
    >
      Eliminar completados
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { ITodoItem } from '@/models';

import ToDoItem from '@/components/ToDo/ToDoItem/ToDoItem.component.vue';

@Component({
  components: {
    'todo-item': ToDoItem
  }
})
export default class ToDoList extends Vue {
  @Prop({ required: true, type: Array }) todoList!: ITodoItem[];

  @Getter('todo/shouldEnableDeleteAllCheckedToDoItem')
  private shouldEnableDeleteAllCheckedToDoItem!: () => boolean;

  @Action('todo/deleteAllCompletedToDoItem')
  private deleteAllCompletedToDoItem!: () => Promise<void>;

  deleteCompleted(): void {
    this.deleteAllCompletedToDoItem();
  }
}
</script>

<style lang="scss">
.todolist {
  background-color: $white;
  width: 25vw;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-group {
  max-height: 75vh;
  overflow-y: auto;
}

.delete-completed-button {
  width: 50%;
  align-self: center;
}

.no-data {
  font-size: 1.75rem;
  color: $secondary;
}
</style>
