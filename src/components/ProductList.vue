<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const data = computed(() => {
  return store.getters.getList;
});

onMounted(() => {
  store.dispatch("getData");
});
</script>

<template>
  <section>
    <div class="container">
      <ul class="product-list">
        <li v-for="product in data" :key="product.id">
          <router-link
            class="product"
            :to="{ name: 'Detail', params: { id: product.id } }"
          >
            <img :src="product.img" :alt="product.title" />
            <span class="title">{{ product.title }}</span>
            <div class="add">
              <span class="price">${{ product.price }}</span>
              {{ product.name }}
            </div>
          </router-link>
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
        .product {
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
          .title {
            margin-top: 10px;
          }
          .add {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>
