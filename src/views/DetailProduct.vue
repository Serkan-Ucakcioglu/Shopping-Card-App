<script setup>
/*İMPORT */
import HeaderBar from "@/components/HeaderBar.vue";
import axios from "axios";
import { ref, defineProps, computed, onMounted } from "vue";
import { useStore } from "vuex";
/* */
const props = defineProps(["id"]);
const data = ref([]);
const store = useStore();
let active = ref(false);

const api = () => {
  axios.get(`http://localhost:3000/data/${props.id}`).then((res) => {
    data.value = res.data;
  });
};

const title = computed(() => {
  return store.getters.getTitle;
});

const checkBasket = computed(() => {
  return store.state.basket.includes(data.value.id);
});

const update = () => {
  if (checkBasket.value == false) {
    store.dispatch("newItem", data.value.id);
    active.value = true;
  } else {
    console.log("else");
  }
};
onMounted(api);
</script>

<template>
  <HeaderBar />
  <section>
    <div class="container">
      <div class="product-detail">
        <img :src="data.img" :alt="data.title" />
        <span>{{ data.title }}</span>
        <div class="details">
          <span>${{ data.price }}</span>
          <button
            :class="{ active: active == true }"
            @click="update"
            class="buy-btn"
          >
            {{ title }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;

  .product-detail {
    max-width: 500px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    box-shadow: 0 1px 2px 1px #eee;
    border: 1px solid #eee;
    padding: 30px;
    box-sizing: border-box;

    span {
      margin-top: 5px;
    }

    img {
      width: 100%;
      height: 300px;
    }

    .details {
      width: 100%;
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 20px;
        margin-bottom: 5px;
      }

      .buy-btn {
        background: #33c3f0;
        border: 1px solid #33c3f0;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        margin-top: 5px;
        color: white;
        cursor: pointer;
      }
    }
  }
}

.active {
  background: #3fb883 !important;
}
</style>
