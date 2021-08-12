<template>
  <div class="home-page page">
      <div class="intro bordered-container">
          <h3 class="top-text">Hello, I am</h3>
          <h2><span>Hang</span> Nguyen</h2>
          <p>A <span>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
          <div class="content-footer">
            <a class="shadowed resume" href="#"><span>R</span>esumé</a>
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
        .resume {
            color: #fff;
            display: inline-block;
            background: var(--pink);
            font-size: 36px;
            line-height: 140%;
            width: 100%;
            height: max-content;
            text-align: center;
            text-shadow: 2px 2px 0px #000000;
            span {
                color: var(--yellow);
            }
        }
        .social-icons {
            justify-content: center;            
            li {
                margin-left: 21px;
                transform: scale(.9);
                padding-bottom: 5px;
                &:first-child {
                    margin-left: 0;
                }               

            }
            
        }       
        @media screen and (min-width: 749px) {
             & + footer {
                nav {
                    display: none;
                }
            }            
            h2 {
                font-size: 70px;
                padding-bottom: 14px;
            }
            p {
                font-size: 36px;
                padding-bottom: 56px;
            }
            .resume {
                width: 239px;
            }
            .content-footer {
                display: flex;
                justify-content: space-between;
            }
            .social-icons {
                li {
                    transform: scale(.8);
                }
            }

        }
    }
</style>