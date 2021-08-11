<template>
<section class="container">
    <div>
      <h1>Counter App</h1>
      <p>counter:{{$store.state.counter}}
      <button @click="countUp">+1</button>
      <button @click="resetCount">reset</button>
      </p>
      
    </div>
  </section>
</template>
 
<script>

export default {
  methods: {
    countUp(){
      this.$store.commit("countUp")
    },
    resetCount(){
      this.$store.commit("resetCounter")
    }
  },
}
</script>
