export const state = () => ({
 todos:['これと','あれと','それ'],
})

export const mutations = {
 submitTodo(state,todo){
    state.todos.push(todo)
  },

  deleteTodo(state,index){
   state.todos.splice(index,1)
  }
}


export const getters = {
 todos: state => {
  return state.todos
 }
}