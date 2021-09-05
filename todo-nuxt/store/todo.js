export const state = () => ({
todos: [
],
editTodo:""
})

export const actions = {
  // ＜＜＜＜＜Todo一覧用＞＞＞＞＞
 addTodo({dispatch}, payload){
  this.$fire.firestore.collection("todos").add({})
  .then((res) => {
    console.log(res)
    this.$fire.firestore.collection('todos').doc(res.id)
    .set({
      todo: payload,
      done: false,
      id: res.id,
      status:"未着手"
    })
    .then(() => {
      dispatch('fetchTodos')
    })
  })
 },

async fetchTodos({commit}){
  // commit('initTodos')
  const getTodoRef = this.$fire.firestore.collection("todos").orderBy("todo","asc")
  const getTodo = await getTodoRef.get()
  let todo = []
  getTodo.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    todo.push(doc.data())
  });
  commit('addTodos',todo)
  
 },

 async deleteTodo({dispatch},id){
   console.log(id)
  //  let todos = this.$fire.firestore.collection("todos").where('id','==',id)
  //  await todos.get().then(querySnapshot => querySnapshot.docs.map(doc => doc.ref.delete())
  //  )
  let deleteTodoRef = this.$fire.firestore.collection("todos").doc(id)
  await deleteTodoRef.delete()
  dispatch('fetchTodos')

},
// ＜＜＜＜＜Edit用＞＞＞＞＞
async fetchEditTodo({commit}, id){
  // commit('initTodos')
  const getTodoRef = this.$fire.firestore.collection("todos").doc(id)
  const getTodo = await getTodoRef.get()
  const getEditTodo = getTodo.data()
  
  commit('getEditTodo',getEditTodo)
 },

async newEditTodo({commit},todo){
  const editTodoRef = this.$fire.firestore.collection("todos").doc(todo.id)
  await editTodoRef.update(todo)
  this.$router.push("/todo")
}

}

export const mutations = {
initTodos(state){
state.todos = [];
 
},

addTodos(state,todos){
state.todos=todos
  // console.log(state.todos)

},

doneTodo(state,todo){
  todo.done = !todo.done
  let todoRef = this.$fire.firestore.collection("todos").doc(todo.id)
  todoRef.update(todo)
  // dispatch('fetchTodos')
  
},

// ＜＜＜＜＜Edit用＞＞＞＞＞
getEditTodo(state,getEditTodo){
  state.editTodo = []
  state.editTodo.push(getEditTodo)
  // console.log(state.editTodo)
},

newEditTodo(state,editTodo){
  const editTodoData = state.editTodo
  editTodoData.forEach(
    data => {data.todo = editTodo}
  )
  console.log(this.editTodo)
},

changeStatus(state,status){
  const editTodoData = state.editTodo
  editTodoData.forEach(
    data => {data.status = status}
  )
}

}

export const getters = {
 todos: state => {
  //  console.log(state.todos)
   return state.todos
 },

 editTodo: state => {
  // console.log(state.editTodo)
  return state.editTodo
},
}