<template>
  <div class="login-form">
    <h1>Авторизация клиента</h1>
    <hr>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";

export default {
  components: {LoginForm}
}
</script>