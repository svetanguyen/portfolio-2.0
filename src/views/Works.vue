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
    },
    data() {
      return {

      }
    }
}
</script>

<style lang="scss" scoped>
  .top-text {
    color: var(--yellow);
  }
  .projects-wrapper {
    padding: 30px 25px;
  }
   @media screen and (min-width: 749px) {
    .projects-wrapper {
      padding: 94px 50px 173px;
    }
    .bordered-container {
      max-width: 1240px;
      padding: 118px 107px 96px;
    }
   }
</style>