<template>
  <div class="form-wrapper">
      <div class="bordered-container">
           <h3 class="top-text">Get in touch</h3>
           <h3 class="email">matematikaforeber@gmail.com</h3>
            <SocialIcons />
          <form action="">
              <input type="text" id="FullName" placeholder="Full Name" name="FullName">
              <input type="email" placeholder="Email" name="Email">
              <textarea name="Message" placeholder="Message" id="Message" cols="30" rows="10"></textarea>
              <button class="shadowed" type="submit"><span>S</span>end a message</button>
          </form>
      </div>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';
export default {
    name: 'Form',
    components: {
        SocialIcons
    }
}
</script>

<style lang="scss" scoped>

.form-wrapper {
    padding: 40px 25px;
    .email {
        color: var(--yellow);
        font-size: 21px;
        line-height: 21px;
        text-align: center;
    }
}

button {
    display: inline-block;
    background: var(--pink);
    width: 100%;
    margin-top: 25px;
    outline: none;
    box-shadow: none;
    text-shadow: 2px 2px 0px #000000;
    font-size: 36px;
    color: #fff;
    line-height: 140%;
    span {
        color: var(--yellow);
    }
}

.social-icons {
    justify-content: center;
    padding-top: 17px;
    
}

form {
    padding-top: 26px;
    input {
        display: block;
        width: 100%;
        background: transparent;
        padding: 7px 5px;
        border: 1.5px solid #AAAAAA;
        font-weight: normal;
        font-size: 21px;
        margin-bottom: 15px;
        color: #aaa;
         &:focus {
            border: 1.5px solid #AAAAAA;
            box-shadow: none;
            outline: none;
        }       
        &:-webkit-autofill,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:hover,       
        &:-webkit-autofill:active  {
             background: transparent;
            padding: 7px 5px;
            border: 1.5px solid #AAAAAA;
            font-weight: normal;
            font-size: 21px;
            margin-bottom: 15px;
            color: #aaa;
            -webkit-box-shadow: 0 0 0 50px transparent inset;
             -webkit-background-clip: text !important;
            -webkit-text-fill-color: #aaa !important;
        }
        &::placeholder {
            font-size: 21px;
            line-height: 21px;
            font-weight: normal;
            opacity: .4;
        }
    }
    textarea {
        display: block;
        color: #aaa;
        padding: 7px 5px;
        background: transparent;
        border: 1.5px solid #AAAAAA;
        width: 100%;
        font-size: 21px;
        font-weight: normal;
        line-height: 21px;
        &:focus {
            border: 1.5px solid #AAAAAA;
            box-shadow: none;
            outline: none;
        }
        &::placeholder {
            font-size: 21px;
            line-height: 21px;
            font-weight: normal;
            opacity: .4;
        }
    }
}

@media screen and (min-width: 749px) {
    .email {
        font-size: 36px;
        line-height: 36px;
    }
    .bordered-container {
        padding: 56px;
    }
    .form-wrapper {
        padding: 94px 50px 173px;
    }
    .social-icons {
        padding-top: 24px;

    }
    button {
        font-size: 41px;
    }
    form {
        padding-top: 44px;
        input {
            font-size: 36px;
            line-height: 36px;
            padding: 4px 9px;
            margin-bottom: 17px;
            &::placeholder {
                font-size: 36px;
                line-height: 36px;
            }
        }
        textarea {
            font-size: 36px;
            padding: 4px 9px;
            line-height: 36px;
            &::placeholder {
                font-size: 36px;
                line-height: 36px;
            }
        }
    }
}
</style>