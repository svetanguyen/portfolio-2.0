<template>
  <footer>
      <nav class="container">
           <h2>Sveta</h2>
           <menu-links :mobileShow="true" />
           <social-icons />
      </nav>
  </footer>
</template>

<script>
import MenuLinks from './MenuLinks.vue'
import SocialIcons from './SocialIcons.vue'
export default {
    name: 'Footer',
    components: {
        SocialIcons,
        MenuLinks
    }
}
</script>

<style lang="scss">
footer {
    h2 {
        color: #fff;
        font-size: 46px;
        line-height: 46px;
    }

    .social-icons {
        li {
            margin-left: 30px;
            &:first-child {
                margin-left: 0;
            }
        }
    }

    svg {
        transform: scale(.7);
        path {
            fill: #fff;
        }
        .inside {        
            fill: var(--background)        
        }
        
    }

    @media screen and (max-width: 748px) {
        .container {
            padding: 0;
        }
        h2 {
            padding: 25px 25px 19.5px;
        }
        .social-icons {
            justify-content: center;

        }
        
    }
    
   
    @media screen and (min-width: 749px) {
        font-size: 49px;
        line-height: 49px;
        h2 {
            font-size: 49px;
            line-height: 49px;
        }
        
    }

    @media screen and (min-width: 1008px) {
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;            
        }
    }

    @media screen and (min-width: 749px) and (max-width: 1008px) {
        .social-icons {
            li {
                margin-left: 10px;
            }
        }
        .container {
            .menu-links {
                .link {
                    display: block;
                    margin: 0;
                }
            }
        }
        
    }
}
    
</style>