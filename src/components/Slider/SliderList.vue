<template>
  <section class="slider d-none d-md-flex">
    <img src="../../assets/dommain.jpg">
  </section>
</template>

<script>
export default {
  name: "SliderList"
}
</script>

<style>
  .slider {
    margin: 15px 0;
  }

  .slider img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
</style>