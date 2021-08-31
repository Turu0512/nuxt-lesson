<template>
<div>
  <h1>TODO LIST</h1>
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

    <v-list
      subheader
      two-line
      flat
    >
    <div v-for="(todo,index) in todos" :key="todo.id">
        <v-list-item
        @click="doneTodo(todo.id)"
        :class="{'grey darken-1' : todo.done}"
        >
          <template>
            <v-list-item-action>
              <v-checkbox
                :input-value="todo.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{'text-decoration-line-through' : todo.done}">
                {{todo.todo}}
                </v-list-item-title>
              
            </v-list-item-content>

            <v-list-item-action>
          <v-btn icon
          @click.stop="deleteTodo(index)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>

          </template>
        </v-list-item>
          <v-divider></v-divider>

    </div>

        
    </v-list>
</div>
</template>

<script>


export default {
  async fetch ({ store }){
    await store.dispatch('todo/fetchTodos')
  },

data(){
  return {
    newTodo: '',
  }
},

computed:{
  todos(){
    
    return this.$store.getters['todo/todos']
  }
},

methods: {
  addTodo(){
    if(this.newTodo){
    this.$store.dispatch('todo/addTodo',this.newTodo)
    this.newTodo=''
    }
  },
  doneTodo(id){
    let todo = this.todos.filter(todo => todo.id === id)[0]
    // todo.done = !todo.done
    this.$store.dispatch('todo/doneTodo',todo)

},
  deleteTodo(index){
    this.$store.dispatch('todo/deleteTodo',this.todos[index].id)
    console.log(this.todos[index].id)
  }
}
}
</script>

<style>

</style>