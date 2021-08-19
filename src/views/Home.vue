<template>
  <Banner />
  <Card />
  <!-- <div class="wrapper-container">
    <Modal />
    <TabView />
  </div> -->
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner.vue"
// import Modal from "../components/Modal"
// import TabView from "../components/TabView"
import Card from "../components/Card.vue"
export default {
  name: "Home",
  components: {
    Banner,
    // TabView,
    // Modal,
    Card,
  },
  data() {
      return {
          cardHidden: true,
      };
  },
  methods: {
    showCard() {
      this.cardHidden = !this.cardHidden
    },
  },
};
</script>

<style lang="scss">
  
</style>
