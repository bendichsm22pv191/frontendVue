import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: '1',
        imageSrc: 'https://basket-05.wb.ru/vol730/part73026/73026818/images/big/1.jpg',
        name: 'Свечи',
        firm: 'Territory in Comfort',
        discount: '50 %',
        price: '1 000'
    },
    {
        id: '2',
        imageSrc: 'https://basket-04.wb.ru/vol654/part65402/65402093/images/big/1.jpg',
        name: 'Часы',
        firm: 'Territory in Comfort',
        discount: '10 %',
        price: '3 500'
    },
    {
        id: '3',
        imageSrc: 'https://basket-05.wb.ru/vol734/part73448/73448885/images/big/1.jpg',
        name: 'Гобелен',
        firm: 'Гобелен картина',
        discount: '25 %',
        price: '2 950'
    },
    {
        id: '4',
        imageSrc: 'https://basket-10.wb.ru/vol1342/part134209/134209984/images/big/1.jpg',
        name: 'Наволочка декоративная',
        firm: 'Jolie Maison',
        discount: '30 %',
        price: '600'
    },
    {
        id: '5',
        imageSrc: '	https://basket-05.wb.ru/vol757/part75748/75748289/images/big/1.jpg',
        name: 'Фотоальбом',
        firm: 'Bublik handmade',
        discount: '8 %',
        price: '1 600'
    },
    {
        id: '6',
        imageSrc: 'https://basket-03.wb.ru/vol405/part40535/40535408/images/big/1.jpg',
        name: 'Держатель для фото',
        firm: 'BOGACHO',
        discount: '10 %',
        price: '12 500'
    },
    {
        id: '7',
        imageSrc: 'https://basket-05.wb.ru/vol825/part82597/82597624/images/big/1.jpg',
        name: 'Термометр комнатный',
        firm: 'Elstream',
        discount: '70 %',
        price: '340'
    },
    {
        id: '8',
        imageSrc: 'https://basket-04.wb.ru/vol550/part55058/55058075/images/big/1.jpg',
        name: 'Биокамин',
        firm: 'Москалёв Александр Михайлович',
        discount: '15 %',
        price: '10 000'
    }
    ]
  },
  getters: {
    productById (state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {

  }
})
