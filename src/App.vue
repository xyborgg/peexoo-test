<template>
  <div class="app">
    <Navigation />
    <router-view />
    <main>
      
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
export default {
  name: "App",
  components: {
    Navigation,
  }
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  position: relative;
}

:root {
    --bg-color: rgba(255, 253, 247, 1);
    --border-color: #00000029;
    --primary-color: #E39400;
    --secondary-color: rgba(0, 0, 0, 1);
    --nav-secondary-color: rgba(77, 77, 77, 1);
    --nav-color: #4D4D4D;
    --overlay-color: rgba(0, 0, 0, 0.8);
    --nav-background-color: rgba(242, 159, 5, 0.2);
    --button-color: rgba(242, 159, 5, 1);
    --light-grey: rgba(228, 228, 228, 1);
    --brown: rgba(83, 45, 13, 1);
    --dark-brown: rgba(83, 45, 13, 1);
    --profile-bg-color: rgba(255, 253, 247, 1);
    --bg-white: rgba(255, 255, 255, 1);
    --font-poppins: 'Poppins', sans-serif;
    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-xxl: 22px;
    --fs-heading: 32px;
    --fs-large: 34px;
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

}

/* PRESETS */
*, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--main-text);
    line-height: 1.3;
    font-size: var(--fs-md);
}

ul {
    list-style-type: none;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}

a:hover, a:focus {
    color: var(--primary-color) !important;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    color: var(--nav-secondary-color);
    line-height: 1.1;
    font-weight: 600;
}

p {
    margin: 10px 0;
    color: var(--secondary-color);
}

p:last-child, p:last-of-type {
    margin: 0px;
}

img {
    width: 100%;
}

.increment-reset {
    counter-reset: section 0;
}

.d-flex {
  display: flex;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.d-none {
  display: none !important;
}

.container {
    width: 100%;
    padding: 0;
    margin: 0;
}

.center {
  text-align: center;
}

section {
  margin: 0px 23px;
  padding: 0px;
}

.active {
    color: var(--secondary-color);
    font-weight: 600;
    background-color: rgba(242, 159, 5, 0.1);
    border: 1px solid rgba(242, 159, 5, 0.1) ;
    border-radius: 19px;
    -webkit-border-radius: 19px;
    -moz-border-radius: 19px;
    -ms-border-radius: 19px;
    -o-border-radius: 19px;
}
</style>
