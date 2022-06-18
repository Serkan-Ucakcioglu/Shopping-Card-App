<script setup>
import { useStore } from 'vuex';

const store = useStore();
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
        <a class="shopping">
          <div class="svg">
            
          </div>
          <span>Sepetim</span>
          <span class="count" v-show="store.state.count > 0"> {{store.state.count}}</span>
        </a>
      </nav>
    </div>
  </header>
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
        svg {
          width: 30px;
          height: 50px;
        }
        span {
          font-size: 13px;
          margin-top: 5px;
        }
        .count{
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
</style>
