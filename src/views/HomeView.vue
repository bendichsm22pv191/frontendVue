<template>

    <div class="home">
        <SliderList></SliderList>
        <CatalogView/> 
        

    </div>
</template>

<script>

import ProductCard from "@/components/Product/ProductCard";
import SliderList from "@/components/Slider/SliderList";
export default {
    name: 'HomeView',
    components: {
        ProductCard,
        SliderList
    }
}
</script>

<style>
.content-title{
    text-align:center
}
</style>