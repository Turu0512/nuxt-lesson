export const state = () => {
todos: []
}

export const actions = {
 addTodo({commit}, payload){
  return this.$fire.firestore.collection("todos").add(payload);
 }
}

export const mutations = {

}