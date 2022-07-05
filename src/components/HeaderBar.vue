<script setup>
import { onUpdated, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import axios from "axios";

const basketData = ref([]);
const store = useStore();
const basket = store.state.basket;
let isOpen = ref(null);
const title = ref("");

const getBasket = () => {
  try {
    if (basket.length > 0) {
      axios.get(`http://localhost:3000/data/${basket}`).then((res) => {
        basketData.value = res.data;
      });
    }
  } catch (error) {
    console.log(error);
  }
};


watchEffect(() => {
  basketData.value;
  title.value = basket;
});
onUpdated(getBasket);
</script>
<template>
  <header>
    <div class="container">
      <nav>
        <router-link to="/">
          <img
            src="https://media.istockphoto.com/vectors/online-shopping-concept-online-store-objects-and-banner-table-with-vector-id954687560"
            alt=""
          />
        </router-link>
        <a
          @mouseover="isOpen = true"
          @mouseleave="isOpen = false"
          class="shopping"
        >
          <div class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
          <span>Sepetim</span>
          <span class="count" v-show="store.state.basket.length > 0">
            {{ store.state.basket.length }}</span
          >
        </a>
      </nav>
    </div>
  </header>

  <div v-show="isOpen == true && basket.length" class="shoppings">
    <h3>Sepetim ({{ basket.length }}) Ürün</h3>
    <router-link to="/" class="product">
      <img :src="basketData.img" alt="" />
      <span>{{ basketData.title }}</span>
      <span>${{ basketData.price }}</span>
    </router-link>
    {{ title }}
    <div class="go-basket">
      <button>Sepete git</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
header {
  background: #ddd;
  padding: 5px;
  .container {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
      }
      .shopping {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          width: 20px;
          height: 50px;
          margin-right: 10px;
          margin-top: 10px;
        }
        span {
          font-size: 13px;
          margin-top: 5px;
        }
        .count {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          margin-left: 5px;
        }
      }
    }
  }
}

.shoppings {
  position: absolute;
  top: 25;
  right: 0;
  background: white;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 7%);
  border-radius: 7px;
  display: flex;
  width: 300px;
  max-height: 300px;
  overflow: auto;
  flex-direction: column;
  padding: 5px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  h3 {
    text-align: center;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 4px;
    }
    span {
      color: black;
    }
  }
  .go-basket {
    position: relative;

    button {
      margin-top: 20px;
      background: none repeat scroll 0 0 #f27a1a;
      border: medium orange;
      color: #ffffff;
      height: 30px;
      right: 10%;
      position: absolute;
      bottom: 55%;
      width: 100px;
      cursor: pointer;
      border-radius: 4px;
    }
  }
}
.isOpen {
  display: flex !important;
}
</style>
