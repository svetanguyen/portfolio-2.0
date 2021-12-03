<template>
  <div class="form-wrapper">
      <div class="bordered-container">
           <h3 class="top-text">Get in touch</h3>
           <h3 class="email">matematicaforeber@gmail.com</h3>
            <SocialIcons />
          <form class="contact-form" @submit.prevent="sendEmail">
              <div v-show="errorName" class="error error-name">Please enter your name</div>
              <input v-model="name" type="text" placeholder="Full Name" name="name">
              <div v-show="errorEmail" class="error error-email">Please enter your email</div>
              <input v-model="email" type="email" placeholder="Email" name="email">
              <div v-show="errorMessage" class="error error-message">Please enter the message</div>
              <textarea v-model="message" name="message" placeholder="Message" cols="30" rows="10"></textarea>
              <button class="shadowed" type="submit"><span>S</span>end a message</button>
          </form>
          <div class="success-message" v-show="sentSuccessfully">
              <header>
                  <div class="text">
                    <img :src="require(`../assets/images/heart.png`)" alt="heart">
                    <p>sveta_notification.exe</p>
                  </div>
                  <closeIcon class="icon" @click="closeWindow" />
                  
              </header>
              <div class="content">
                  <h2>Congratulations</h2>
                  <p>Message was sent successfully</p>
                  <button @click="closeWindow"><span>O</span>kay</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';
import closeIcon from '../assets/icons/close-window.svg';
import emailjs from 'emailjs-com';
export default {
    name: 'Form',
    components: {
        SocialIcons,
        closeIcon       
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            errorName: false,
            errorEmail: false,
            errorMessage: false,
            sentSuccessfully: false
        }
    },    
     methods: {               
        sendEmail: function(e) { 
            this.errorName = false;
            this.errorEmail = false;
            this.errorMessage = false;
            if (!this.name) {
                this.errorName = true;
                return
            }
            if (!this.email) {
                this.errorEmail= true;
                return
            }                       
            if (!this.message) {
                this.errorMessage= true;
                return
            }
        emailjs.sendForm('service_h6kpkq8', 'template_4epkp3w', e.target, 'user_7OnLzJ8nHsHkdquvPMSK1', {
            name: this.name,
            email: this.email,
            message: this.message
        })
            .then((result) => {
                console.log('result', result)
                console.log('SUCCESS!', result.status, result.text);   
                this.sentSuccessfully = true; 
                this.name = '';
                this.email = '';
                this.message = '';
            }, (error) => {
                console.log('FAILED...', error);
            });
        },
        closeWindow: function() {
            this.sentSuccessfully = false;
        }
    }
}
</script>

<style lang="scss">

.form-wrapper {
    padding: 40px 25px;
    .email {
        color: var(--yellow);
        font-size: 21px;
        line-height: 21px;
        text-align: center;
    }
    
    .social-icons {
        justify-content: center;
        padding-top: 17px;
        .shadowed {
            &:hover {
                transform: translate(2px, 2px) scale(.8);
            }
        }
    }    
    .error {
        padding-bottom: 15px;
        color: var(--yellow);
    }

}

.success-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    color: #E6E6E6;
    font-size: 32px;
    line-height: 32px;    
    header {
        display: flex;
        padding: 7px 7px 7px 12px;
        height: 45px;
        justify-content: space-between;
        background: #010180;
        border: 1px solid #C0C1BE;
        box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #FFFFFF, inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
    }
    .text {
        display: flex;
        align-items: flex-end;
    }
    .icon {
        max-height: 100%;
    }
    .content {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #C4C4C4;
        border: 1px solid #C0C1BE;
        text-align: center;
        padding: 57px 20px 36px;
        box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #FFFFFF, inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
        p {
            font-size: 38px;
            line-height: 38px;
            margin-bottom: 63px;
            color: #FFF;
        }
    }
    button {
        max-width: 163px;
        box-shadow: 2px 2px 0px #000000;
        &:hover,
        &:focus {
            box-shadow: none;
            transform: translate(2px, 2px);
        }
    }
    h2 {
        font-size: 57px;
        line-height: 57px;
        color: #fff;
        margin-bottom: 15px;
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


form {
    padding-top: 26px;
    input {
        display: block;
        width: 100%;
        background: var(--background);
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
            -webkit-box-shadow: 0 0 0 50px var(--background) inset;
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
    button {
        border: none;
    }
    textarea {
        display: block;
        color: #aaa;
        padding: 7px 5px;
        background: var(--background);
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
    .form-wrapper {
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
    .success-message {
        max-width: 754px;
        width: 100%;
    }
    }
    
}
</style>