<template>
  <footer>
    <div class="container">
      <div>&copy;2022 БГТУ</div>
      <div>+7(960)637-37-84</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
  footer {
    background-color: #5d48bb;
    padding: 15px;
    color: rgb(24, 216, 88);
    height: 50px;
    margin-top: -50px;
  }

  footer .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>