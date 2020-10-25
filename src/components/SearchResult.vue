<template>
  <div class="container">
    <img :src="imageLink" alt="movie-cover" />
    <h3>{{ title }}</h3>
    <h3 style="color: #888">({{ year }})</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { imageLink } from '../api/Requests'
export default Vue.extend({
  props: {
    title: String,
    imagePath: String,
    date: String,
    director: String
  },
  computed: {
    imageLink () {
      return imageLink(this.imagePath)
    },
    year () {
      return this.date.substring(0, 4)
    }
  }
})
</script>

<style scoped>
  .container {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    background-color: #eee;
    border: solid #555 3px;
  }
  .container:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  img {
    width: 75px;
    height: 100px;
    margin: 5px;
  }
  h3 {
    margin-left: 10px;
  }
</style>
