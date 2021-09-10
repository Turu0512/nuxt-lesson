import firebase from '@/plugins/firebase';

export const state = ()=>({
loginUser:[]
})

export const mutations = {
  setLoginUser(state,user){
    state.loginUser = user
  },

 logout(state){
    state.loginUser = null
  },

}

export const actions = {
  logoutFb(){
    firebase.auth().signOut()
  }
}

// export const actions = {
//   setLoginUser({commit},user){
//     commit("setLoginUser",user)
//   }
// }