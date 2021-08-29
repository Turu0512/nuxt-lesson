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

async deleteTodo({commit},id){
  // return new Promise((resolve,reject) => { 
  //  this.$fire.firestore.collection("todos").where('id','==',id).get()
  //  .then(snapshot =>{snapshot.forEach(doc => {
  //   console.log(doc)
  //   console.log(snapshot)
  //   this.$fire.firestore.collection("todos").doc(doc.id).delete()
  //  })
  // })
  //  })

  let todos = this.$fire.firestore.collection("todos").where('id','==',id)
  let todosSnapshot = await todos.get()
  await Promise.all(
  todosSnapshot.docs.map(doc => doc.ref.delete())
);

// SnapShotが取れない
// let todos = this.$fire.firestore.collection("todos").where('id','==',id)
// let todosSnapshot = await todos.doc().get()
// let todo = todosSnapshot.data()
// console.log(todo)
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