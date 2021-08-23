<template>
<div class="">
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
    <div v-for="todo in todos" :key="todo.id">
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
                {{todo.title}}
                </v-list-item-title>
              
            </v-list-item-content>

            <v-list-item-action>
          <v-btn icon
          @click.stop="deleteTodo(todo.id)">
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
data(){
  return {
    newTodo: '',
    todos:[
      {
        id:1,
        title:"hoge",
        done:false
      },
      {
        id:2,
        title:"hoge2",
        done:false
      },
      {
        id:3,
        title:"hoge3",
        done:false
      }
    ]
  }
},

methods: {
  async addTodo(){
    let newTodo = {
      id:Date.now(),
      title:this.newTodo,
      done:false
    } 
    await this.$store.dispatch('todo/addTodo',newTodo)
    this.newTodo=''
  },
  doneTodo(id){
    let todo = this.todos.filter(todo => todo.id === id)[0]
    todo.done = !todo.done
},
  deleteTodo(id){
    this.todos = this.todos.filter(todo => todo.id !==id )
  }
}
}
</script>

<style>

</style>