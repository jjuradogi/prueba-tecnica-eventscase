<template>
  <div class="add-todo-container mb-4 container-fluid">
    <div class="input-group add-todo-item">
      <input
        type="text"
        class="form-control form-control-lg add-todo-item__input"
        placeholder=""
        aria-label="Descripción Tarea"
        aria-describedby="add-todo-button"
        v-model="toDoDescription"
      />
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" id="add-todo-button" @click="addTodo">Añadir</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class AddToDo extends Vue {
  @Action('todo/createToDoItem')
  private createToDoItem!: (description: string) => Promise<void>;

  toDoDescription = '';

  addTodo(): void {
    this.createToDoItem(this.toDoDescription);

    this.toDoDescription = '';
  }
}
</script>

<style lang="scss">
.add-todo-container {
  background-color: $white;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.add-todo-item {
  display: flex;
  align-self: center;

  &__input {
    background-color: $grey-light;

    &:focus {
      background-color: $grey-light;
      border-color: $primary;
      box-shadow: none;
    }
  }
}
</style>
