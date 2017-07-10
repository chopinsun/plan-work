<template>
    <form action="" id="login-form">
        <div class="login">
            <div class="login-icon">
                <img src="img/login/icon.png" alt="Welcome to Mail App" />
                <h4>Welcome to
                    <small>plan work</small>
                </h4>
            </div>
    
            <div class="login-form">
                <div class="form-group">
                    <input type="text" class="form-control login-field" value="" placeholder="Enter your name" id="login-name"  v-model="username"/>
                    <label class="login-field-icon fui-user" for="login-name"></label>
                </div>
    
                <div class="form-group">
                    <input type="password" class="form-control login-field" value="" placeholder="Password" id="login-pass" v-model="password" />
                    <label class="login-field-icon fui-lock" for="login-pass"></label>
                </div>
    
                <a class="btn btn-primary btn-lg btn-block" href="#" v-on:clock="login">Log in</a>
                <a class="login-link" href="#">Lost your password?</a>
            </div>
        </div>
    </form>
</template>

<script>
import Users from '../store/users.vue'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  computed: {
    username: function () {
      return this.username
    },
    password: function () {
      return this.password
    }
  },
  methods: {
    login: function (event) {
      let ele = event.target
      if (ele.val()) {
        Users.account.forEach((element) => {
          if (element.username == this.username && element.password==this.password ) {
                    this.$router.push('/workspace');
                }})
        }else{
            alert('account is necessary!')
        }
    }
  }
}
</script>

