<template>
  <div class="catalog">
    <h1>Каталог товаров</h1>

    <hr>

    <div class="row gy-5">
      <div class="col-md-6 col-lg-3 mb-5" v-for="product in products">
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
  </div>
</template>


<script>
import ProductCard from "@/components/Product/ProductCard";
export default {
  name: "CatalogView",
  components: {
    ProductCard
  },
  data(){
    return this.$store.state
  }
  
}
</script>

<style>
</style>