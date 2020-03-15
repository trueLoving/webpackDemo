<template>
  <el-container style="height: 98vh; border: 1px solid #eee">
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

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <transition name="fade">
        <router-view />
      </transition>
      
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 98vh;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

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