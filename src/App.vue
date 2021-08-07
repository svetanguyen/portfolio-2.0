<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {   
    Header 
  }
}
</script>

<style lang="scss">
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

  body {
    background: #212121;
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
