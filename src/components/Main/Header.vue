<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <div class="logo">
            <img src="../../assets/homies.svg">
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Catalog'}">Каталог</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'About'}">О компании</router-link>
            </li>
            <li class="nav-item" v-if="!isAuth">
              <router-link class="nav-link" :to="{name: 'Login'}">Войти</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Basket'}">Корзина</router-link>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Поиск товара" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">Поиск</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAuth: localStorage.getItem('user') !== null
    }
  }
}
</script>

<style>
  header {
    background-color: #5d48bb;
    height: 50px;
  }

  nav.navbar {
    background-color: #5d48bb;
    padding: 0;
  }

  nav .nav-link {
    color: rgb(24, 216, 88);
  }

  nav .nav-link:hover {
    color: #ddd;
  }

  header .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  header .logo img {
    width: 40px;
  }

  header nav {
    margin-left: auto;
  }

  header nav ul {
    display: flex;
    list-style: none;
    color: #fff;
    padding: 0;
    margin: 0;
  }

  header nav ul li {
    padding: 15px 15px;
  }

  .router-link-active,
  .nav-link:focus,
  .nav-link:hover
  {
    color: #fff;
  }
</style>