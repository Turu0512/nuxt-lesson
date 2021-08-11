<template>
  <div class="container">
      <p>{{message}}</p>
      <p>あかさたな</p>
      <hr>
      <router-link to="/price">Price Page</router-link>
  </div>

</template>

<script>
export default {
  data(){
  return {
    message: "Hello Nuxt.js"
  }
  }
}
</script>

<style>
.container{font-family: "Nikukyu"; }
</style>