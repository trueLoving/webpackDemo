<template>
  <el-container style="height: 98vh; border: 1px solid #eee">
    <Aside />
    <app-container />
  </el-container>
</template>


<style>
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<script>
import AppContainer from "./components/AppContainer.vue";
import Aside from "./components/Aside.vue";

export default {
  components: {
    AppContainer,
    Aside
  }
};
</script>
