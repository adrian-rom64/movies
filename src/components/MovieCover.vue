<template>
  <div class="container">
    <img v-bind:src="imageLink" alt="movie-cover" @click="onClick" />
    <VoteBadge :vote="vote" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { imageLink as getImageLink } from '../api/Requests'
import VoteBadge from './VoteBadge.vue'

export default Vue.extend({
  props: {
    imagePath: String,
    vote: Number
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
  },
  components: {
    VoteBadge
  }
})
</script>

<style scoped>
  .container {
    width: 300px;
    height: 450px;
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    transition: all 0.4s;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #555;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(1.2);
  }
  .container:hover {
    transform: scale(1.05);
  }
</style>
