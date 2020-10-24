<template>
  <div class="container">
    <h3>We got {{ this.movies.length }} movies this week!</h3>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Requests from '../api/Requests'

interface State {
  loading: boolean;
  movies: object[];
}

export default Vue.extend({
  name: 'Index',
  data () {
    return {
      loading: true,
      movies: []
    } as State
  },
  created () {
    this.fetch()
  },
  props: {
    msg: String
  },
  methods: {
    fetch: async function () {
      this.loading = true
      const movies = await Requests.fetchTop()
      this.movies = movies
      this.loading = false
    }
  }
})
</script>

<style scoped lang="scss">
  .container {
    text-align: left;
  }
  h3 { text-align: center; }
</style>
