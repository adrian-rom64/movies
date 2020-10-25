<template>
  <span>
    <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M141.421 106.066V176.777L8.22544e-06 35.3553H70.7107L141.421 106.066Z" fill="#1EA734"/>
    </svg>
    <span class="vote">{{ vote.toFixed(1) }}</span>
  </span>
</template>

<style scoped>
  svg {
    z-index: 2;
    width: 180px;
    height: 180px;
    position: absolute;
    top: -21px;
    right: -22px;
    opacity: 0.8;
  }
  .vote {
    z-index: 3;
    position: absolute;
    top: 53px;
    right: 53px;
    font-size: 24px;
    transform: rotate(45deg);
    color: white;
  }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    vote: Number
  }
})
</script>
