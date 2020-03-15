<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-active="active" :router="true">
      <el-menu-item index="/components/c1">
        <template slot="title">
          <i class="el-icon-setting"></i>Component 1
        </template>
      </el-menu-item>
      <el-menu-item index="/components/c2">
        <template slot="title">
          <i class="el-icon-setting"></i>Component 2
        </template>
      </el-menu-item>
      <el-menu-item index="/components/c3">
        <template slot="title">
          <i class="el-icon-setting"></i>Component 3
        </template>
      </el-menu-item>
      <el-menu-item index="/components/c4">
        <template slot="title">
          <i class="el-icon-setting"></i>Component 4
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      active: "/components/c1"
    };
  },
  mounted() {
    this.active = this.$route.path;
  }
};
</script>

<style>
.el-aside {
  color: #333;
  height: 98vh;
}
</style>