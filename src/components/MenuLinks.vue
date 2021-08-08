<template>
  <ul class="menu-links" :class="{mobileHidden: !mobileShow}">
        <router-link class="link" to="#"><span>H</span>ome</router-link>
        <router-link class="link" to="#"><span>W</span>orks</router-link>
        <router-link class="link" to="#"><span>A</span>bout</router-link>
        <router-link class="link" to="#"><span>C</span>ontact</router-link>
  </ul>
</template>

<script>
export default {
    name: 'menu-links',
    props: ['mobileShow']
}
</script>

<style lang="scss" scoped>
    .menu-links {
        color: #fff;
        font-size: 36px;
        line-height: 36px;
                       
    }    

    .link {
        display: block;
        padding: 10px 41px;
        cursor: pointer;
        color: #fff;
        &:first-child {
            margin: 0;
        }
        &:hover {
            background: var(--pink);
        }
        span {
            color: var(--yellow);
        }
    }

    @media screen and (min-width: 749px) {                   
        .menu-links {
            display: block;               
        }          
        .link {
            display: inline-block;
            margin-left: 50px;
            padding: 10px 22px 11px 20px;
        }
    }

    @media screen and (min-width: 749px) and (max-width: 1140px) {
        .menu-links {       
            font-size: 30px;
            line-height: 30px;
            .link {
                margin-left: 10px;
                &:first-child {
                    margin: 0;
                }
            }
        }
    }       
</style>