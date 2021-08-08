<template>
  <div class="header-wrapper">
      <header class="container">
        <nav class="desktop-nav">
           <h1>Sveta</h1>
           <menu-links :mobileShow="false" />
        </nav>
        <menu-icon @click="toggleMobileNav" class="menu-icon" />

      </header>
      <transition name="mobile-nav">
        <div class="mobile-nav" v-show="mobileNav">
            <div class="mobile-nav--header container">
                <h3>navigation</h3>
                <close-icon @click="closeMobileNav" />
            </div>
            <menuLinks :mobileShow="true" />
        </div>
      </transition>
     
  </div>
</template>

<script>
import menuIcon from '../assets/icons/menu.svg'
import closeIcon from '../assets/icons/close.svg'
import menuLinks from './MenuLinks.vue'
export default {
    name: 'page-header',
    data() {
        return {
            mobileNav: null,
        };        
    },
    components: {
        menuIcon,
        closeIcon,
        menuLinks
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        closeMobileNav() {
            this.mobileNav = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .header-wrapper {
        border-bottom: 2px solid var(--gray);
        padding-top: 5px;
        padding-bottom: 6px;
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }        
        nav {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        h1, h3 {
            color: #fff;
            font-size: 46px;
            line-height: 46px;
        }        

       

        .menu-icon {
            width: 26px;

        }
        

        .mobile-nav {
            background: var(--background);
            border: 2px solid var(--gray);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            .link {
                display: block;
                font-size: 34px;
                line-height: 34px;
                padding: 10px 41px;  
                margin: 0;
                &:focus {
                    background: var(--pink);
                }              
            }
        }

        .mobile-nav--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid var(--gray);
            padding-bottom: 9px;
        }

        .mobile-nav-enter-active, .mobile-nav-leave-active {
            transition: .05s all ease-in-out;
        }

        .mobile-nav-enter, .mobile-nav-leave-to {
            transform: translateY(-100%);
        }
         @media screen and (min-width: 749px) {
            
            padding-top: 0;
            padding-bottom: 0;                     
            h1 {
                font-size: 49px;
                line-height: 49px;
            }
            .menu-icon {
                display: none;
            }


        }
        
    }    
</style>