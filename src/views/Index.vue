<template>
  <div>{{ this.movies.length }}</div>
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

</style>
