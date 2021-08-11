<template>
  <div class="projects-wrapper">
    <div class="bordered-container">
      <div class="top-text">Projects</div>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '../components/ProjectCard.vue'
export default {
    name: 'Works',
    components: {
      Card
    }
}
</script>

<style lang="scss" scoped>
  .top-text {
    color: var(--yellow);
  }
</style>