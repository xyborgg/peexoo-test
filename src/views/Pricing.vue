<template>
  <Banner />
  <PricingCard />
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner"
import PricingCard from "../components/PricingCard"
export default {
  name: "Pricing",
  components: {
    Banner,
    PricingCard,
  }
};
</script>

<style lang="scss">
  .wrapper-container {
    display: flex;
    position: absolute;
    width: 100%;
  }
</style>