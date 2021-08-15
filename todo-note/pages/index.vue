<template>
  <div class="page">
    <ul>
      <li v-for="(todo, index) in todos" 
      :key="todo"
      @click='deleteTodo(index)'>
        {{ todo }}
      </li>
    </ul>
    <form @submit.prevent="submitTodo">
      <input 
      v-model="todo"
      type="text"
      placeholder="Add a Todo">
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo:''
    }
    
  },
  methods: {
    submitTodo(){
      if(this.todo){
        this.$store.commit('todos/submitTodo',this.todo)
        this.todo=''
      }
    },
    deleteTodo(index){
      this.$store.commit('todos/deleteTodo',index)
    }
  },
  computed: {
    todos(){
      return this.$store.getters['todos/todos']
    }
  }
}
</script>
