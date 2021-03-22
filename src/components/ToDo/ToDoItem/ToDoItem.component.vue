<template>
  <li class="list-group-item">
    <div class="row">
      <div class="custom-control custom-checkbox form-container">
        <input type="checkbox" class="custom-control-input" :id="todoItem.id" v-model="todoItem.isChecked" />
        <label class="custom-control-label" :for="todoItem.id">
          <span v-if="!todoItem.isChecked" class="ml-4 secondary-text">
            {{ todoItem.description }}
          </span>
          <span v-else class="ml-4 secondary-text checked-text-container">
            <span class="checked-text">{{ todoItem.description }}</span>
          </span>
        </label>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { ITodoItem } from '@/models';

@Component
export default class ToDoItem extends Vue {
  @Prop({ required: true, type: Object }) todoItem!: ITodoItem;
}
</script>

<style lang="scss">
.list-group-item {
  & label {
    font-size: 1.75rem;
    margin-top: 3px;
  }
}

.checked-text-container {
  text-decoration: line-through;
  color: $primary;
}

.checked-text {
  color: $grey-light;
}

.custom-control-label:before {
  border-color: $primary;
  border-width: 4px;
  width: 30px;
  height: 30px;
  color: $primary;
}

.custom-control-label:after {
  width: 30px;
  height: 30px;
  color: $primary;
  z-index: -1;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  border-color: $white;
  color: $primary;
  background-color: $white;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%234faebd' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: none;
}

@keyframes strike {
  from {
    text-decoration-color: transparent;
  }
  to {
    text-decoration-color: auto;
  }
}
.checked-text-container {
  text-decoration: line-through;
  animation: strike 2s linear;
}
</style>
