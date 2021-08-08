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
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.24) 0%, rgba(249, 249, 249, 0.2175) 0.01%, rgba(234, 234, 234, 0.152945) 13.54%, rgba(229, 229, 229, 0.133462) 13.55%, rgba(222, 222, 222, 0.107122) 29.68%, rgba(216, 216, 216, 0.0799167) 29.69%, rgba(211, 211, 211, 0.0596295) 45.82%, rgba(205, 205, 205, 0.0361583) 45.83%, rgba(202, 202, 202, 0.0242387) 63.53%, rgba(199, 199, 199, 0.0134659) 63.54%, rgba(197, 197, 197, 0.00299334) 79.17%, rgba(198, 198, 198, 0.00684193) 79.18%, rgba(196, 196, 196, 0) 100%);
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
        @media screen and (min-width: 749px) {
            padding: 140px 50px;
             & + footer {
                nav {
                    display: none;
                }
            }
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