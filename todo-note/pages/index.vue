<template>
<div class="page">
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="todo.id"
      @click="deleteTodo(index)"
    >
      {{ todo.todo }}
    </li>
  </ul>
  <form
    @submit.prevent="submitTodo"
  >
    <input
      v-model="todo"
      type="text"
      placeholder="Add a Todo"
    >
    <button
      type="submit"
    >
      Add Todo
    </button>
  </form>
</div>
</template>

<script>
export default {
  async fetch ({ store }) {
  await store.dispatch('todo/getTodos')
  },
  data () {
  return {
  todo: ''
  }
  },
  computed: {
  todos () {
    return this.$store.getters['todo/todos']
  }
  } ,
  methods: {
  submitTodo () {
    if(this.todo) {
      this.$store.dispatch('todo/submitTodo', this.todo)
      this.todo = ''
    }
  },
  deleteTodo (index) {
    this.$store.dispatch('todo/deleteTodo', this.todos[index].id)
  },
  } ,
}
</script>