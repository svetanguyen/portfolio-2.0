<template>
  <footer>
      <nav class="container">
           <h2>Sveta</h2>
           <menu-links :mobileShow="true" />
           <social-icons />
      </nav>
      <div class="copyright container">
          <p>© Hang Nguyen 2021</p>
          <p>Design: Tin Bui</p>
      </div>
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
    border-top: 2px solid #AAAAAA;
    h2 {
        color: #fff;
        font-size: 46px;
        line-height: 46px;
        padding: 25px 25px 19.5px;
    }

    .social-icons {
        li {
            margin-left: 20px;
            &:first-child {
                margin-left: 0;
            }            
        }
        svg {
            g {
                filter: none;
            }
        }
    }

    .copyright {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        line-height: 18px;
        color: #AAA;
        margin-top: 31px;
        padding-bottom: 20px;

    }

    svg {
        path {
            fill: #fff;
        }
        .inside {        
            fill: var(--background)        
        }
        
    }

    @media screen and (max-width: 748px) {
        .container {
            &:first-child {
                padding: 0;
            }
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
        .social-icons {
            .shadowed {
                &:hover {                    
                   
                        transform: scale(.6) translate(2px, 2px);                    
                
                    path {
                        &:not(.inside) {
                            fill: var(--pink);
                        }
                    }
                }
            }
        }
       
        
    }

    @media screen and (min-width: 1008px) {
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;      
            flex-wrap: wrap;      
        }
         .copyright {
            margin-top: 17px;
            padding-bottom: 17px;
        }
        h2 {
            padding: 0;
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