<template>
  <div class="home-page">
      <div class="intro">
          <h3>Hello, I am</h3>
          <h2><span>Hang</span> Nguyen</h2>
          <p>A <span>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
          <div class="content-footer">
            <a href="#"><span>R</span>esumé</a>
            <SocialIcons />
          </div>
          
      </div>
  </div>
</template>

<script>
import SocialIcons from '../components/SocialIcons.vue'
export default {
    name: 'Home',
    components: {
        SocialIcons
    }
}
</script>

<style lang="scss">
    .home-page {  
        padding: 40px 25px;
        .intro {
            border: 2px solid #AAA;
            position: relative;
            padding: 25px 15px;
            background: url('../assets/images/Gradient.png') no-repeat 0 100%;
        }
        h3 {
            position: absolute;
            top: 0;
            transform: translateY(-50%);
            left: 16px;
            color: #AAA;
            font-size: 21px;
            line-height: 140%;
            background: var(--background);    
            padding: 0 7px;       
        }
        h2 {
            font-size: 46px;
            line-height: 140%;
            color: var(--pink-light);
            padding-bottom: 20px;
            span {
                color: var(--yellow);
            }
        }
        p {
            color: var(--pink-light);
            font-size: 21px;
            line-height: 140%;
            padding-bottom: 20px;
            span {
                color: var(--yellow);
            }
        }
        a {
            color: #fff;
            display: inline-block;
            background: var(--pink);
            font-size: 36px;
            line-height: 140%;
            width: 100%;
            text-align: center;
            span {
                color: var(--yellow);
            }
        }
        .social-icons {
            justify-content: center;
            li {
                margin-left: 31px;
                padding-bottom: 5px;
                &:first-child {
                    margin-left: 0;
                }
            }
        }
        & + footer {
            nav {
                display: none;
            }
        }
        @media screen and (min-width: 749px) {
            padding: 140px 50px;
            .intro {
                width: 100%;
                max-width: 820px;
                margin: 0 auto;
                padding: 23px 56px 57px;
            }
            h2 {
                font-size: 70px;
                padding-bottom: 14px;
            }
            h3 {
                font-size: 36px;
            }
            p {
                font-size: 36px;
                padding-bottom: 56px;
            }
            a {
                width: 239px;
            }
            .content-footer {
                display: flex;
                justify-content: space-between;
            }

        }
    }
</style>