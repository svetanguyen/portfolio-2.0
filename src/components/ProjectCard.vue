<template>
  <div class="project-card">
    <a :href="work.link" class="project-wrapper bordered-container">
       <div class="top-text">{{ work.projectTitle }}</div>
        <div class="img-wrapper">
          <img class="scale" :src="require(`../assets/images/${work.projectCoverPhoto}.jpg`)" :alt="work.projectTitle">
          <img :src="require(`../assets/images/${work.projectCoverPhoto}.jpg`)" :alt="work.projectTitle">
        </div>
        <div class="description">{{ work.technologies }}</div>
    </a>
     
  </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ["work"]
}
</script>

<style lang="scss" scoped>
.project-card {
  padding: 0 0 14px;
  &:last-child {
    padding: 0;
  }
  .project-wrapper {
    display: block;
    position: relative;
    padding: 46px 52px 1px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.24) 0%, rgba(249, 249, 249, 0.2175) 0.01%, rgba(234, 234, 234, 0.152945) 13.54%, rgba(229, 229, 229, 0.133462) 13.55%, rgba(222, 222, 222, 0.107122) 29.68%, rgba(216, 216, 216, 0.0799167) 29.69%, rgba(211, 211, 211, 0.0596295) 45.82%, rgba(205, 205, 205, 0.0361583) 45.83%, rgba(202, 202, 202, 0.0242387) 63.53%, rgba(199, 199, 199, 0.0134659) 63.54%, rgba(197, 197, 197, 0.00299334) 79.17%, rgba(198, 198, 198, 0.00684193) 79.18%, rgba(196, 196, 196, 0) 100%);
  }
  img {
    max-width: 100%;
  }
  .scale {
    display: none;
  }
  .description {
    font-size: 21px;
    line-height: 29.4px;
    color: #fff;
    text-align: center;
    margin: 5px 0;
    font-weight: normal;
  }
  @media screen and (min-width: 749px) {
    width: 50%;
    padding: 10px;
    &:last-child {
      padding: 10px;
    }
    .top-text {
      display: none;
      line-height: 1;
    }
    .description {
      font-size: 36px;
      line-height: 50.4px;
    }
    .scale {
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    &:hover {
      .top-text {
        display: block;
      }
      .scale {
        display: none;
      }
    }
  }
  
}
  
</style>