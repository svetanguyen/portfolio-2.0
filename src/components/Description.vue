<template>
  <div class="two-columns description">
      <div class="column">
          <h3 class="top-text">FE Dev</h3>
          <div class="img-wrapper">
              <img :src="require(`../assets/images/photo.png`)" alt="My photo">
          </div>
          <h3 class="bottom-text">NG-HA_[1998]</h3>
        </div>   
      <div class="column linear-gradient">
          <div class="text-wrapper">
              <p>
                <span class="text">                  
                    I’m a front end developer with experience in developing themes on Shopify and a little bit of experience with working on apps (VueJS).
                    <br>
                    <br>
                    I am always willing to learn new challenging things and strive to grow as developer.
                                    
                 </span>
              </p>
             
             
          </div>
        </div>   
  </div>
</template>

<script>
export default {
    name: 'Description',  
}
</script>

<style lang="scss">
    .description {
        .column {
            padding: 16px;
            position: relative;
            border: 2px solid #aaa;
            &:first-child {
                display: flex;
                align-items: center;
                z-index: 1;
                justify-content: center;
            }
        }
        img {
            width: 100%;
        }
        .text-wrapper {
            color: var(--pink-light);
            font-size: 19.8831px;
            line-height: 140%;
           p {
               position: relative;                            
           }
        }
        @media screen and (min-width: 749px) {
            .column {
                padding: 58px 56px;
            }
            .text-wrapper {
                font-size: 36px;               
            }
        }               
    }
    
</style>