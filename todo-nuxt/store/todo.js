export const state = () => ({
todos: [
]
})

export const actions = {
 addTodo({dispatch}, payload){
  this.$fire.firestore.collection("todos").add({})
  .then((res) => {
    console.log(res)
    this.$fire.firestore.collection('todos').doc(res.id)
    .set({
      todo: payload,
      done: false,
      id: res.id
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

async doneTodo({dispatch},todo){
    todo.done = !todo.done
  let todoRef = this.$fire.firestore.collection("todos").doc(todo.id)
  await todoRef.update(todo)
  // dispatch('fetchTodos')
  
}


}

export const mutations = {
initTodos(state){
state.todos = [];
 
},

addTodos(state,todos){
state.todos=todos
},

}

export const getters = {
 todos: state => {
   return state.todos
 },
}