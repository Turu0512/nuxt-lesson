<template>
<div>
  <v-card>
  <v-card-title class="font-weight-bold">Todoの追加</v-card-title>
  </v-card>
  <!-- ＜＜＜＜＜新規Todo入力欄＞＞＞＞＞ -->
  <v-text-field
  v-model="newTodo"
  @click:append="addTodo"
  @keyup.enter="addTodo"
    class="pa-3"
    solo
    label="addTodo"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>


</div>
</template>

<script>
export default {
data(){
  return {
    newTodo: '',
  }
},

methods: {
  addTodo(){
    if(this.newTodo){
    this.$store.dispatch('todo/addTodo',this.newTodo)
    this.newTodo=''
    }
    this.$router.push('/todo')
}
}
}
</script>

<style>

</style>