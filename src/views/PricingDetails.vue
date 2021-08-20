<template>
  <Banner />
  <PackageDetails />
</template>

<script>
import Banner from "../components/Banner"
import PackageDetails from "../components/PackageDetails"
export default {
  name: "PricingDetails",
  components: {
    Banner,
    PackageDetails,
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