<template>
  <div class="skills-wrapper">
    <div class="bordered-container">
      <h3 class="top-text">Technologies</h3>
      <ul>
        <li>
          <div><Html /></div>
          <span>HTML</span></li>
        <li>
          <div><Vue /></div>
          <span>Vue.js</span></li>
        <li>
          <div><Js /></div>
          <span>Javascript</span></li>
        <li>
          <div><Css /></div>
          <span>CSS</span></li>
        <li>
          <div><Liquid /></div>
          <span>Liquid</span></li>
        <li>
          <div><Webpack /></div>
          <span>Webpack</span></li>
        <li>
          <div><Git /></div>
          <span>Git</span></li>
        <li>
          <div><Gulp /></div>
          <span>Gulp</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Html from '../assets/icons/html.svg'
import Css from '../assets/icons/css.svg'
import Git from '../assets/icons/git.svg'
import Gulp from '../assets/icons/gulp.svg'
import Js from '../assets/icons/js.svg'
import Vue from '../assets/icons/vue.svg'
import Webpack from '../assets/icons/webpack.svg'
import Liquid from '../assets/icons/liquid.svg'
export default {
  name: 'Skills',
  components: {
    Liquid,
    Html,
    Css,
    Git,
    Gulp,
    Js,
    Vue,
    Webpack
  }
}
</script>

<style lang="scss" scoped>
.skills-wrapper {
  padding: 0 0 40px;
  h3 {
    color: var(--yellow);
  }
  .bordered-container {
    padding: 34px 15px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 50%;
      text-align: center;
      max-height: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 53px;
    }    
    div {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      transform: scale(.7);
    }
    span {
      color: #fff;
      font-size: 21px;
      text-align: center;
      line-height: 140%;
    }
  }
  @media screen and (min-width: 749px) {
    padding: 83px 0 163px;
    .bordered-container {
      padding: 55px 55px 0;
    }
    ul {      
      li {
        width: 25%;
        max-height: 185px;
        margin-bottom: 67px;
      }
      span {
        font-size: 36px;
      }
      svg {
        transform: scale(.85);

      }
    }
  }
}

</style>