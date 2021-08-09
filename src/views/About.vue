<template>
  <div class="container about-page page">
      <Description />
      <Skills />
  </div>
</template>

<script>
import Description from '../components/Description.vue'
import Skills from '../components/Skills.vue'
export default {
    name: 'About',
    components: {
        Description,
        Skills
    }  
}
</script>

<style lang="scss">
    .about-page {
        
    }
</style>