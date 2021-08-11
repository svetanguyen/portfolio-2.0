<template>
  <div>
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
    name: 'Contacts',
    components: {
      Form
    }
}
</script>

<style lang="scss">
  .form-wrapper {
    .social-icons {
      li {
        margin: 0 10px;
        transform: scale(.8);
        
      }
    }
  }
</style>