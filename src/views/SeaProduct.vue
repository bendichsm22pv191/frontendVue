<template>
    <div class="sea">
      <h1>{{ product.name }}</h1>
  
      <hr>
        <div class="cart">
          <ProductCard 
              :id="product.id" 
              :imageSrc="product.imageSrc" 
              :name="product.name" 
              :firm="product.firm" 
              :discount="product.discount" 
              :price="product.price">
            </ProductCard>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard";
export default {
  name: "SeaProduct",
  components: {ProductCard},
  props: ['id'],
  computed: {
    product () {
        const id = this.id
        return this.$store.getters.productById(id)
    }
  }
}
</script>

<style>
</style>