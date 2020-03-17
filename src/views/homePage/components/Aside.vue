<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-active="active" :router="true">
      <el-menu-item v-for="(item,index) in routes" :key="index" :index="item.path">
      <template slot="title">
          <i :class="item.meta.icon"></i>{{item.meta.title || 'hello world'}} 
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      active: "/components/c1",
      routes:[]
    };
  },
  mounted() {
    this.active = this.$route.path;
    // 从路由中获取要配置的视图路径
    // 有多少个视图就有多少个菜单栏
    this.routes = this.$router.options.routes[0].children;
  }
};
</script>

<style>
.el-aside {
  color: #333;
  height: 98vh;
}
</style>