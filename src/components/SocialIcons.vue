<template>
  <ul class="social-icons">
      <li>
          <Insta />
      </li>
      <li>
          <Github />
      </li>
      <li>
          <Linkedin />
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
        @media screen and (min-width: 749px) {
            padding: 0;
        }
    }
</style>