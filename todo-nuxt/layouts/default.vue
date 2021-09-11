<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app>
      <v-list-item>
        <v-list-item-avatar>
          <img v-if="photoURL" :src="photoURL">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
          <v-list-item-title class="text-h6">
            TODO LIST
          </v-list-item-title>
          <v-list-item-subtitle>
            LIST
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon 
      @click="drawer = !drawer"
      v-show="$store.state.login.loginUser" 
      
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn class="info" @click="logout" v-if="this.$store.state.login.loginUser">ログアウト</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
  
  export default {
    created(){
      firebase.auth().onAuthStateChanged(user => {
          if(user){
          const  { uid , displayName , photoURL} = user
          this.$store.commit("login/setLoginUser",{ uid , displayName , photoURL})
          if(this.$router.currentRoute.name === 'login')this.$router.push({name: 'todo'})
      }else{
        this.$store.commit("login/logout")
        this.$router.push({ name: 'login'})
      }})
    },
  name: "aaa",
  data: () => ({ 
    drawer: null,
    items: [
      { title: 'Todoリスト', icon: 'mdi-format-list-checks' ,to:"/todo"},
      { title: '新規Todoの追加', icon: 'mdi-account-plus-outline' ,to:"/create"},
      ],
  }),

  methods: {
    logout(){
      this.$store.dispatch("login/logoutFb")
    }
  },

  computed:{
    userName(){
    return this.$store.getters["login/userName"]
  },
  photoURL(){
    return this.$store.getters["login/photoURL"]
  }
}
  }
  
</script>
