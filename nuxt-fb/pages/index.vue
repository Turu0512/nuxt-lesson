<template>
  <div class="container mt-5">

    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-3">
        <h2>Users</h2>
      </div>
    </div>

    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-1 font-weight-bold">Avatar</div>
      <div class="col-12 col-sm-2 font-weight-bold">Name</div>
      <div class="col-12 col-sm-1 font-weight-bold">Age</div>
      <div class="col-12 col-sm-1 font-weight-bold">Edit</div>
      <div class="col-12 col-sm-1 font-weight-bold">Delete</div>
    </div>

    <div v-for="(user, key) in $store.getters.getUsers" :key="key"
        class="row justify-content-center mb-3">
        <div class="col-12 col-sm-1">
        <img :src="user.avatar" class="img-fluid rounded-circle" />
      </div>
      <div class="col-12 col-sm-2">
        {{ user.name.first}} {{ user.name.last}}
      </div>
      <div class="col-12 col-sm-1">
        {{ user.age}}
      </div>
      <div class="col-12 col-sm-1">
        <nuxt-link :to="{ name: 'users-edit-id', params: { id: user.id } }">
          Edit
        </nuxt-link>
      </div>
      <div class="col-12 col-sm-1">
        <a href="#" @click.prevent="deleteUser(user.id)">Delete</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
created(){
 this.$store.dispatch('fetchUsers')
}, 

methods: {
    deleteUser(id) {
      if (!confirm('Are you sure?')) return

      this.$store.dispatch('deleteUser', { id })
      .then(() => {
        setTimeout(() => {
          this.$store.dispatch('fetchUsers')
        }, 1000)
      })
      this.$store.dispatch('deleteFile', { name: id })
    }
  }
}

</script>

<style>

</style>