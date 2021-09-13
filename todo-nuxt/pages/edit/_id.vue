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
        :value="newEditTodo.todo"
        @input="newEditTodos"
        @keyup.enter="newEditTodos"
        outlined
        clearable
        solo
        ></v-text-field>
        <v-select
          :items="items"
          :value="newEditTodo.status"
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
  <!-- <p>{{this.$store.state.todo.editTodo}}</p> -->

</v-app>
</template>

<script>
export default {
  
  
  data(){
    return{
      newEditTodo : {
    },
    
    newStatus:"",
    items:["未着手","作業中","完了"]
  }
  
},
  async created(){
    await this.$store.dispatch('todo/fetchEditTodo',this.$route.params.id)
    console.log(this.$store.state.todo.editTodo)
    const edit=this.$store.state.todo.editTodo
    edit.forEach(data => {this.newEditTodo = data})
    
  },

methods:{
  newEditTodos(e){
    this.$store.commit('todo/newEditTodo',e)

  },
  updateTodo(){
    this.$store.dispatch("todo/newEditTodo",this.newEditTodo)
    
  },
  // ＜＜＜＜＜状態管理＞＞＞＞＞
  status(e){
this.$store.commit('todo/changeStatus',e) 

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