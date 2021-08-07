<template>
  <div class="header-wrapper">
      <header class="container">
        <nav class="desktop-nav">
           <h1>Sveta</h1>
           <ul class="menu-links">
                <router-link class="link" to="#"><span>H</span>ome</router-link>
                <router-link class="link" to="#"><span>W</span>orks</router-link>
                <router-link class="link" to="#"><span>A</span>bout</router-link>
                <router-link class="link" to="#"><span>C</span>ontact</router-link>
           </ul>
        </nav>
        <menu-icon @click="toggleMobileNav" class="menu-icon" />

      </header>
      <transition name="mobile-nav">
        <ul class="mobile-nav" v-show="mobileNav">
            <div class="mobile-nav--header container">
                <h3>navigation</h3>
                <close-icon @click="closeMobileNav" />
            </div>
             <router-link class="link" to="#"><span>H</span>ome</router-link>
            <router-link class="link" to="#"><span>W</span>orks</router-link>
            <router-link class="link" to="#"><span>A</span>bout</router-link>
              <router-link class="link" to="#"><span>C</span>ontact</router-link>
        </ul>
      </transition>
     
  </div>
</template>

<script>
import menuIcon from '../assets/icons/menu.svg'
import closeIcon from '../assets/icons/close.svg'
export default {
    name: 'page-header',
    data() {
        return {
            mobileNav: null,
        };        
    },
    components: {
        menuIcon,
        closeIcon
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
        border-bottom: 2px solid #AAA;
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

        .menu-links {
            color: #fff;
            display: none;
            font-size: 36px;
            line-height: 36px;
            router-link {
                margin-left: 70px;
                &:first-child {
                    margin: 0;
                }
            }
            span {
                color: #F4ED46;
            }
        }

        .menu-icon {
            width: 26px;

        }
        

        .mobile-nav {
            background: #212121;
            border: 2px solid #AAA;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }

        .mobile-nav--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #AAAAAA;
            padding-bottom: 9px;
        }

        .mobile-nav-enter-active, .mobile-nav-leave-active {
            transition: .3s all ease-in-out;
        }

        .mobile-nav-enter, .mobile-nav-leave-to {
            transform: translateY(-100%);
        }
        
        @media screen and (min-width: 749px) {
            font-size: 49px;
            line-height: 49px;
            .menu-links {
                display: block;
            }
            .menu-icon {
                display: none;
            }


        }

        @media screen and (min-width: 749px) and (max-width: 1008px) {
            .menu-links {       
                font-size: 30px;
                line-height: 30px;
                router-link {
                    margin-left: 30px;
                    &:first-child {
                        margin: 0;
                    }
                }
            }
        }        

    }    
</style>