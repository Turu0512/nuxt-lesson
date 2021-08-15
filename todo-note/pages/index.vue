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
      todos:['これと','あれと','それ'],
      todo:''
    }
    
  },
  methods: {
    submitTodo(){
      if(this.todo){
        this.todos.push(this.todo)
        this.todo=''
      }
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    }
  }
}
</script>
