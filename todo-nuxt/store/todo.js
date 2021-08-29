export const state = () => ({
todos: [
]
})

export const actions = {
 addTodo({commit}, payload){
  this.$fire.firestore.collection("todos").add(payload)
  
 },

 async fetchTodos({commit}){
  commit('initTodos')
  let newTodos = await this.$fire.firestore.collection("todos").orderBy("title","asc").get();
  let todo = []
  newTodos.forEach(doc => {
   console.log(doc.id,'=>',doc.data())
   todo.push(doc.data())
  })
  commit('addTodos',todo)
 },

async deleteTodo({dispatch},id){
  // return new Promise((resolve,reject) => { 
  //  this.$fire.firestore.collection("todos").where('id','==',id).get()
  //  .then(snapshot =>{snapshot.forEach(doc => {
  //   console.log(doc)
  //   console.log(snapshot)
  //   this.$fire.firestore.collection("todos").doc(doc.id).delete()
  //  })
  // })
  //  })

//   let todos = this.$fire.firestore.collection("todos").where('id','==',id)
//   let todosSnapshot = await todos.get()
//   todosSnapshot.docs.map(doc => doc.ref.delete()
// );

let todos = this.$fire.firestore.collection("todos").where('id','==',id)
await todos.get().then(querySnapshot => querySnapshot.docs.map(doc => doc.ref.delete())
)
dispatch('fetchTodos')
// SnapShotが取れない
// const todosRef = this.$fire.firestore.collection('todos')
// const deleteTodosRef = todosRef.doc(id)
// console.log(deleteTodosRef)


  }
  
 }



export const mutations = {
initTodos(state){
 state.todos = [];
},
addTodos(state,todos){
 state.todos=todos
}
}

export const getters = {
 todos: state => {
   return state.todos
 },
}