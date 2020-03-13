<template>
  <div>
    <h1>{{msg}}</h1>
    <C1/>
  </div>
</template>

<script>

import C1 from './components/C1';

export default {
  components:{
    C1
  },
  data() {
    return {
      msg: "hello world123"
    };
  }
};
</script>

<style>
h1{
  color: blue;
}
</style>