<!-- <template>
  <div class="card col-sm-3">
    <div>
      <img src="#" />
    </div>
    <div class="product-title"><b>{{ item.name }}</b></div>
    <br>
    <div>Класс: Свечи</div>
    <div>Фирма: Territory in Comfort</div>
    <br>
    <div>
      <span class="price">{{ item.price }} ₽</span>
      <span class="discount">1 680 ₽</span>
    </div>
    <div class="triangle"></div>
    <div class="discount-percent">50%</div>
    <br>
    <button class="btn btn-cart">В корзину</button>
  </div>
</template>

<script>
export default {
    name: "ProductCard"
}
</script>

<style>
  .product {
    position: relative;
    border: 1px solid rgb(224, 14, 14);
    padding: 15px;
  }

  .product .product-title {
    font-size: 16px;
  }

  .product img {
    width: 100%;
  }

  .price {
    font-size: 18px;
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

  .btn-cart {
    width: 100%;
    background-color: rgb(42, 63, 108);
    color: #fff;
    border-radius: 4px;
  }

  .btn.btn-cart:hover {
    background-color: rgb(19, 24, 47);
    color: #fff;
  }
</style> -->

<template>
    <!-- <div class="card col-sm-3">
      <img src="@/components/photo/att28919.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class = "card-title">AMD FX 9590</h5>
          <div>
            <span class="price">14880 ₽</span>
            <span class="discount">7440 ₽</span>
          </div>
          <div class="triangle"></div>
          <div class="discount-percent">50%</div>
          <div class="p-3 d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-outline-danger" type="button">Купить</button>
          </div>
        </div>
    </div> -->
    <div class="product">
      <div>
        <router-link class="nav-link" :to="{name: 'Product'}">
          <img src="@/components/photo/700-nw.jpg" class="card-img-top"/>
        </router-link>
      </div>
      <br>
      <!-- <div class="product-title"><b>{{ item.name }}</b></div> -->
      <div class="product-fact">Класс: Шкатулки</div>
      <div class="product-fact">Фирма: Territory in Comfort</div>
      <br>
      <div>
        <span class="price">2 000 ₽</span>
        <span class="discount">2 000 ₽</span>
      </div>
      <div class="triangle"></div>
      <div class="discount-percent">50%</div>
      <br>
      <div class="p-3 d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-outline" type="button">В корзину</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard2",
    props: ["item"]
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