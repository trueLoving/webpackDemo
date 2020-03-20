<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-active="active" :router="true">
      <el-menu-item v-for="(item,index) in routes" :key="index" :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          {{item.meta.title || 'hello world'}}
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      active: "c1",
      routes: []
    };
  },
  mounted() {
    this.active = this.$route.path.split("/")[2];
    let routes = this.$router.options.routes;
    let r = []
    const travel = function(route){
      if (route.children) {
        for (let i = 0; i < route.children.length; i++) {
          travel(route.children[i]);
        }
      }
      if (route.meta) {
        r.push(route);
      }
    }
    for (let i = 0; i < routes.length; i++) {
      travel(routes[i]);
    }
    // 从路由中获取要配置的视图路径
    // 有多少个视图就有多少个菜单栏\
    // console.log(r);
    this.routes = r;
  }
};
</script>

<style>
.el-menu {
  overflow: hidden;
  scroll-behavior: unset;
  color: #333;
  height: 97.8vh;
}
</style>