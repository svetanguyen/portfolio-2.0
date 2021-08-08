<template>
  <div class="two-columns description">
      <div class="column">
          <h3 class="top-text">FE Dev</h3>
          <div class="img-wrapper">
              <img :src="require(`../assets/images/photo.png`)" alt="My photo">
          </div>
          <h3 class="bottom-text">NG-HA_[1998]</h3>
        </div>   
      <div class="column"></div>   
  </div>
</template>

<script>
export default {
    name: 'Description',
    components: {
    }
}
</script>

<style lang="scss">
    .description {
        .column {
            padding: 16px;
            position: relative;
            border: 2px solid #aaa;
        }
        img {
            width: 100%;
        }
        @media screen and (min-width: 749px) {
            .column {
                padding: 58px 56px;
            }
        }               
    }
    
</style>