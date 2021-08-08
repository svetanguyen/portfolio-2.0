<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {   
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  
  :root {
    --pink: #F31D9E; 
    --pink-light: #FF73D4;
    --yellow: #F4ED46;
    --gray: #AAA;
    --background: #212121;
  }

  @font-face {
    font-family: 'VT323';
    src: url('/fonts/VT323-Regular.eot');
    src: url('/fonts/VT323-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/VT323-Regular.woff2') format('woff2'),
        url('/fonts/VT323-Regular.woff') format('woff'),
        url('/fonts/VT323-Regular.ttf') format('truetype'),
        url('/fonts/VT323-Regular.svg#VT323-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "VT323";      
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: var(--background);
  }

  .mobileHidden {
     display: none;
     @media screen and (min-width: 749px) {
      display: block;
    }    
  }

  .shadowed {
    filter: drop-shadow(2px 2px 0px #000000);
    &:hover {
      filter: none;
      transform: translate(2px, 2px);
    }
  }

  .container {
    margin: 0 auto;
    width: 100%;
    padding: 0 25px;
    @media screen and (min-width: 749px) {
      max-width: 1260px;
      padding: 0 100px;
    }    
    @media screen and (min-width: 749px) and (max-width: 1008px) {
      padding: 0 50px;
    }
  }


</style>
