<template>
  <div class="home">
    <TheCustom />
    <!-- <PostsList /> -->
  </div>
</template>

<script>
// import PostsList from '@theme/components/PostsList.vue'
import TheCustom from '@theme/components/TheCustom.vue'

export default {
  name: 'Home',

  components: {
    // PostsList,
    TheCustom,
  },
}
</script>
