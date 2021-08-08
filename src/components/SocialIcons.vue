<template>
  <ul class="social-icons">
      <li class="shadowed">
          <a href="https://www.instagram.com/svetocentrism/"><Insta /></a>
      </li>
      <li class="shadowed">
          <a href="https://github.com/svetanguyen"><Github /></a>
      </li>
      <li class="shadowed">
          <a href="https://www.linkedin.com/in/sveta-nguyen-493a42218/"><Linkedin /></a>
      </li>
  </ul>
</template>

<script>
import Insta from '../assets/icons/instagram.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Github from '../assets/icons/github.svg'
export default {
    name: 'social-icons',
    components: {
        Insta,
        Linkedin,
        Github
    }
}
</script>

<style lang="scss">
    .social-icons {
        display: flex;
        padding-top: 21px;
        svg {
            vertical-align: middle;
        }
        a {
            display: block;
        }
        @media screen and (min-width: 749px) {
            padding: 0;
        }
    }
</style>