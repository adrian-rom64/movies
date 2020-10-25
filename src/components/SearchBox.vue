<template>
  <div class="search-container">
    <input id="query" v-model="query" placeholder="Search for movies..." />
    <div class="list">
      <SearchResult
        v-for="result in results"
        :key="result.id"
        :title="result.title"
        :imagePath="result.poster_path"
        :date="result.release_date"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Requests from '../api/Requests'
import SearchResult from './SearchResult.vue'

interface State {
  query: string;
  results: object[];
}

export default Vue.extend({
  data () {
    return {
      query: '',
      results: []
    } as State
  },
  watch: {
    query: async function () {
      if (this.query === '') {
        this.results = []
        return
      }

      this.results = await Requests.search(this.query)
    }
  },
  components: {
    SearchResult
  }
})
</script>

<style scoped>
  .list {
    position: absolute;
    z-index: 5;
    width: 100%;
  }
  .search-container {
    width: 100%;
    min-width: 250px;
    max-width: 600px;
    margin: auto;
    position: relative;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 24px;
    outline: none;
    padding: 5px 10px;
    border: solid #888 3px;
    border-radius: 8px;
    color: #444;
    background-color: #f8f8f8;
  }
  input::placeholder {
    color: #aaa;
  }
</style>
