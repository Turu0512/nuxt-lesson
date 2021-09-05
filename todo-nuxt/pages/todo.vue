<template>
<div>
  <h1>TODO LIST</h1>
  <v-btn @click="toCreate">Todoの追加</v-btn>
  <v-select
          :items="items"
          :value="items[0]"
          
          outlined
        ></v-select>
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
        <!-- ＜＜＜＜＜ステータスボタン＞＞＞＞＞ -->
        <v-list-item-action class="mr-6">
              <v-btn outlined>{{todo.status}}</v-btn>
        </v-list-item-action>
      <!-- ＜＜＜＜＜編集ボタン＞＞＞＞＞ -->
        <v-list-item-action>
          <v-btn icon
          @click.stop="editTodo(todo.id)">
            <v-icon color="grey lighten-1">mdi-comment-edit-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      <!-- ＜＜＜＜＜削除ボタン＞＞＞＞＞ -->
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
    items:["全て","未着手","作業中","完了"]
  }
},

computed:{
  todos(){
    return this.$store.getters['todo/todos']
  }
},

methods: {
  
  doneTodo(id){
    let todo = this.todos.filter(todo => todo.id === id)[0]
    // todo.done = !todo.done
    this.$store.commit('todo/doneTodo',todo)

},
  deleteTodo(index){
    this.$store.dispatch('todo/deleteTodo',this.todos[index].id)
    console.log(this.todos[index].id)
  },

toCreate(){
  this.$router.push("create")
},

editTodo(id){
  this.$router.push({ name: 'edit-id' , params: { id: id }})
}

}

}
</script>

<style>

</style>