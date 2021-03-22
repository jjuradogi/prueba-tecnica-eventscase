<template>
  <div class="app-layout-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppLayout extends Vue {}
</script>

<style lang="scss">
.app-layout-container {
  width: 100%;
  height: 100%;
}
</style>
