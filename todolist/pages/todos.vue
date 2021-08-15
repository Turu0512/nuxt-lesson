<template>
  <div>
   <!-- {{ todos }} -->
   <ul>
    <li v-for="todo in todos" :key="todo.id">
     <span v-if="todo.created">
     <input type="checkbox"
     @change="toggle(todo)"
     :checked="todo.done"
     >
     <span :class="{ done:todo.done }">
     {{ todo.name }} {{ todo.created.toDate() | dateFilter }} 
     <button @click="changeStatus(todo)">{{todo.status}}</button>
     </span>
     <button @click="remove(todo.id)">X</button>
      
     </span>
    </li>
   </ul>
   <form @submit.prevent="add">
    <input type="text" v-model="name">
    <button>Add</button>
   </form>
  </div>
</template>

<script>
import moment from "moment"
export default {
data(){
 return {
  name: "",
  done: false,
 }
},
created: function(){
 this.$store.dispatch('todos/init')
},
methods:{
 add(){
  this.$store.dispatch('todos/add',this.name)
  this.name=""
 },
 remove(id){
  this.$store.dispatch("todos/remove",id)
 },
 toggle(todo){
  this.$store.dispatch("todos/toggle",todo)
  // idとdoneの値だ欲しいので、引数にTodo
 },
 changeStatus(todo){
  this.$store.dispatch("todos/changeStatus",todo)
 }
},
computed:{
 todos(){
  // return this.$store.state.todos.todos
  return this.$store.getters['todos/orderdTodos']
 },
},
filters:{
 dateFilter: function(date){
 return moment(date).format('YY/MM/DD HH:mm:ss')
 }
}
}
</script>

<style>
li>span>span.done{
 text-decoration: line-through;
}
</style>