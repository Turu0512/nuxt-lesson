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

 deleteTodo({commit},id){
  console.log(id)
  this.$fire.firestore.collection("todos").doc(id).delete()
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