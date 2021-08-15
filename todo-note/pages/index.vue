<template>
  <div class="page">
    <ul>
      <li v-for="todo in todos" :key="todo">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos:['これと','あれと','それ']
    }
  }
}
</script>
