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
      transform: translate(2px, 2px);
      filter: none;

    }
    &li:hover {
      filter: none;      
      transform: scale(0.9) translate(2px, 2px);
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

  .bordered-container {
    border: 2px solid #AAA;
    position: relative;
    padding: 25px 15px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.24) 0%, rgba(249, 249, 249, 0.2175) 0.01%, rgba(234, 234, 234, 0.152945) 13.54%, rgba(229, 229, 229, 0.133462) 13.55%, rgba(222, 222, 222, 0.107122) 29.68%, rgba(216, 216, 216, 0.0799167) 29.69%, rgba(211, 211, 211, 0.0596295) 45.82%, rgba(205, 205, 205, 0.0361583) 45.83%, rgba(202, 202, 202, 0.0242387) 63.53%, rgba(199, 199, 199, 0.0134659) 63.54%, rgba(197, 197, 197, 0.00299334) 79.17%, rgba(198, 198, 198, 0.00684193) 79.18%, rgba(196, 196, 196, 0) 100%);
    @media screen and (min-width: 749px) {       
      width: 100%;
      max-width: 820px;
      margin: 0 auto;
      padding: 23px 56px 57px;       
    }
  }

  .linear-gradient {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.24) 0%, rgba(249, 249, 249, 0.2175) 0.01%, rgba(234, 234, 234, 0.152945) 13.54%, rgba(229, 229, 229, 0.133462) 13.55%, rgba(222, 222, 222, 0.107122) 29.68%, rgba(216, 216, 216, 0.0799167) 29.69%, rgba(211, 211, 211, 0.0596295) 45.82%, rgba(205, 205, 205, 0.0361583) 45.83%, rgba(202, 202, 202, 0.0242387) 63.53%, rgba(199, 199, 199, 0.0134659) 63.54%, rgba(197, 197, 197, 0.00299334) 79.17%, rgba(198, 198, 198, 0.00684193) 79.18%, rgba(196, 196, 196, 0) 100%);
  }

  .two-columns {
    @media screen and (min-width: 1008px) {
      display: flex;
      .column {
        width: 50%;
      }
    }
   
  }

  .page {
    padding: 40px 25px;
    @media screen and (min-width: 749px) {
      padding: 140px 50px;
    }
  }

  .top-text {
    position: absolute;
    left: 16px;
    top: 0;
    color: #AAA;
    font-size: 21px;
    line-height: 140%;
    transform: translateY(-50%);
    background: var(--background);
    padding: 0 7px;
    @media screen and (min-width: 749px) {
      left: 42px;
      font-size: 36px;

    }
  }

  .bottom-text {
    position: absolute;
    bottom: 0;
    color: #AAA;
    right: 15px;
    font-size: 21px;
    line-height: 140%;
    transform: translateY(50%);
    background: var(--background);
    padding: 0 7px;
    @media screen and (min-width: 749px) {
      font-size: 36px;
      right: 30px;

    }
  }

  @-webkit-keyframes blink{
    0%{opacity: 0;}
    100%{opacity: 1;}
  }

  @-moz-keyframes blink{
    0%{opacity: 0;}
    100%{opacity: 1;}
  }

  @keyframes blink{
    0%{opacity: 0;}
    100%{opacity: 1;}
  }

</style>
