<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const data = ref([]);
const store = useStore();

const api = () => {
   axios.get("http://localhost:3000/data").then((res) => {
  data.value = res.data;
})

}
onMounted(api)
const title = ref('Sepete Ekle')

const det = (product) => {
if(product.id == data.value.id){

     store.state.count++
    title.value = "Sepete Eklendi"
  setTimeout(() => {
      title.value = 'Sepete Ekle'
  }, 2500);
}   
}


</script>

<template>
  <section>
    <div class="container">
      <ul class="product-list">
        <li v-for="(product ) in data" :key="product.id" >
          <router-link :to="{ name: 'Detail', params: { id: product.id } }">
            <img :src="product.img" :alt="product.title" />
            <span>{{ product.title }}</span>
            <div class="add">
              <span>${{ product.price }}</span>
            </div>
          </router-link>
          <button @click="det" class="buy-btn">{{title}}</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
a,
li {
  text-decoration: none;
  list-style: none;
}
section {
  min-height: 400px;
  background: white;
  box-sizing: border-box;
  padding: 30px;
  .container {
    .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;

      li {
        width: 260px;
        height: 370px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 2px 1px #eee;
        border: 1px solid #eee;
        .buy-btn {
          background: #33c3f0;
          border: 1px solid #33c3f0;
          margin-left: 27px;
          height: 30px;
          border-radius: 5px;
          margin-top: 5px;
          padding: 0px 50px;
          color: white;
          cursor: pointer;
        }
        a {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: black;
          img {
            width: 100%;
            height: 250px;
          }
          span {
            margin-top: 10px;
          }
          .add {
            margin-top: 5px;

            span {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
