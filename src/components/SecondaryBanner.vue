<template>
  <section class="banner">
    <div class="banner-title">
      <h1>Book me in less than 5mins</h1>
      <p>from Peexoo.ai</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondaryBanner",
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 165px;
  overflow: hidden;
  // background: transparent url("../assets/banner1.jpg") 0% 0% no-repeat padding-box;
  border-radius: 10px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px;
  // background: rgba(242, 159, 5, 1);
  background-image:  url("../assets/banner1.jpg"), linear-gradient(to right bottom, rgba(242, 159, 5, 1) , rgba(242, 159, 5, 0.1));

  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-image: url("../assets/banner1.jpg"), 
  // -webkit-linear-gradient(
  //   to right bottom,
  //   rgba(242, 159, 5, 1) 0%,
  //   rgba(242, 159, 5, 0.1) 20%,
  //   rgba(242, 159, 5, 0.1) 35%,
  //   rgba(242, 159, 5, 1) 100%
  // );
  // background-blend-mode: color;
}

.banner-title {
  text-align: right;
  color: var(--brown);
}

.banner-title h1 {
  font-size: var(--fs-xxl);
  font-weight: 600;
  color: var(--brown);
  letter-spacing: -0.48px;
  margin: 0;
  padding: 0;
}

.banner-title p {
  font-size: var(--fs-sm);
  color: var(--brown);
  letter-spacing: -0.2px;
  margin: 0;
  padding: 0;
}
</style>