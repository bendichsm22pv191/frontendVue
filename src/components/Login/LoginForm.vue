<template>
  <form class="mt-4" method="post" @submit.prevent="login">
    <div class="mb-4">
      <div><label>Email</label></div>
      <div><input type="email" class="w-100" name="email" id="emailId" aria-describedby="emailHelp" required v-model="email"></div>
      <div class="errors">{{ errors.email }}</div>
    </div>
    <div class="mb-4">
      <div><label>Пароль</label></div>
      <div><input type="password" class="w-100" name="password" id="passwordId" required v-model="password"></div>
      <div class="errors">{{ errors.password }}</div>
    </div>
    <div class="mb-4">
      <button type="submit" class="btn btn-yellow">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login(event) {
        this.$http.post('/user/login', {email: this.email, password: this.password})
            .then((response) => {
                localStorage.setItem("user1", JSON.stringify(response.data))
                this.$router.push({name: "home"})
                console.log(response)
            })
            .catch((response) => {
              this.errors.password = "Неверный логин или пароль."
              console.log(response)
            })
      this.validate()
      event.preventDefault()
    },
    validate() {
      for (let errorsKey in this.errors) {
        this.errors[errorsKey] = ''
      }

      if (this.email.trim().length === 0) {
        this.errors.email = 'Email не заполнен.'
      }

      if (this.password.trim().length === 0) {
        this.errors.password = 'Пароль не заполнен.'
      }
    }
  }
}
</script>

<style>
  .login-form {
    max-width: 400px;
    margin: 25px auto;
    background-color: #f2f2f2;
    padding: 25px;
  }

  .login-form .errors {
    color: red;
  }

  .login-form input {
    border: 1px solid #ddd;
  }

  .btn-yellow {
    width: 100%;
    background-color: #ecce00;
    color: #333;
    transition: 2s;
  }
</style>
