<template>
  <div class="product">
    <div>
      <router-link class="prdouctUrl" :to="`/product/${id}`">
        <img :src="imageSrc" class="card-img-top"/>
      </router-link>
    </div>
    <br>
    <router-link class="prdouctUrl" :to="`/product/${id}`">
    <div class="product-fact">{{ name }}</div>
  </router-link>
    <div class="product-fact">{{ firm }}</div>
    <br>
    <div>
      <span class="price">{{ price }}</span>
      <span class="discount">{{ price }}</span>
    </div>
    <div class="triangle"></div>
    <div class="discount-percent">{{ discount }}</div>
    <br>
    <div class="p-3 d-grid gap-2 col-12 mx-auto">
          <button class="btn btn-outline" type="button">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: 'id',
    imageSrc: 'imageSrc',
    name: 'name',
    firm: 'firm',
    discount: 'discount',
    price: 'price'
  },
  name: "ProductCard",
}
</script>

<style>
.product {
    position: relative;
    border: 1px solid rgb(27, 18, 18);
    padding: 15px;
    background-color: #fff;

}
.product .product-title {
    font-size: 16px;
}
.price {
  font-size: 18px;
  text-decoration: line-through;
  margin-left: 15px;
}
.discount {
  background-color: #f8dc07;
  color: #333;
  padding: 5px;
  font-size: 18px;
  margin-left: 15px;
}
.triangle {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 70px 70px 0 0;
  border-color: red transparent transparent transparent;
}
.discount-percent {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
  font-size: 16px;
}
.product-fact {
  margin-left: 15px;
  color: rgb(31, 3, 63);
}


</style>