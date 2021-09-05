<template>
<v-app>
<div>
  <v-card>
  <v-card-title class="font-weight-bold">Todoの編集</v-card-title>
  </v-card>
  <v-container fluid v-for="todo in editTodo" :key="todo.id" >
    <v-row>
      <v-col cols="2">
        <v-subheader>Todo</v-subheader>
      </v-col>
      <v-col cols="8">
        
        <v-text-field
        :value="todo.todo"
        @input="newEditTodos"
        @keyup.enter="newEditTodos"
        outlined
        clearable
        solo
        ></v-text-field>
        <v-select
          :items="items"
          :value="todo.status"
          @change="status"
          outlined
        ></v-select>
        <v-btn 
        @click="updateTodo"
        >保存</v-btn>
      </v-col>
    </v-row>
  </v-container>
</div>

</v-app>
</template>

<script>
export default {
  
  async created(){
    await this.$store.dispatch('todo/fetchEditTodo',this.$route.params.id)
  },

data(){
  return{
    newEditTodo : {
      todo:"",
      status:"",
      id:this.$route.params.id
    },
    newStatus:"",
    items:["未着手","作業中","完了"]
  }
  
},

methods:{
  changeTodo(todo){
    console.log(todo)
  },
  newEditTodos(e){
    this.newEditTodo.todo=e,
    
    console.log(this.newEditTodo)

  },
  updateTodo(){
    this.$store.dispatch("todo/newEditTodo",this.newEditTodo)
    
  },
  // ＜＜＜＜＜状態管理＞＞＞＞＞
  status(e){
    this.newEditTodo.status=e,
    
    console.log(this.newEditTodo)
  }
},

computed:{
  editTodo(){
    return this.$store.getters['todo/editTodo']
  }
},

}

</script>

<style>

</style>