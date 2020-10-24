<template>
  <div class="container">
    <img v-bind:src="imageLink" alt="movie-cover" @click="onClick" />
    <h3 @click="onClick">{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { imageLink as getImageLink } from '../api/Requests'
export default Vue.extend({
  props: {
    imagePath: String,
    title: String
  },
  computed: {
    imageLink () {
      return getImageLink(this.imagePath)
    }
  },
  methods: {
    onClick () {
      alert('cycki')
    }
  }
})
</script>

<style scoped>
  .container {
    width: 300px;
    height: 500px;
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 280px;
    transition: all 0.4s;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #555;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
  h3 {
    color: #444;
    margin-top: 30px;
    cursor: pointer;
  }
</style>
