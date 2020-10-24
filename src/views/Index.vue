<template>
  <div class="container">
    <h1>We got {{ this.movies.length }} movies this week!</h1>
    <template v-for="movie in movies">
      <MovieCover :title="movie.title" :imagePath="movie.poster_path" :key="movie.id"/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieCover from '../components/MovieCover.vue'
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
  },
  components: {
    MovieCover
  }
})
</script>

<style scoped lang="scss">
  .container { max-width: 1600px; margin: auto; }
  h1 { text-align: center; margin: 50px 0; }
</style>
