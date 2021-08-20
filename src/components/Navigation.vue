<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="logo-container">
          <a href="#">
            <img
              class="logo"
              src="@/assets/logo.71d57f7c.png"
              alt="peexoo logo"
            />
          </a>
        </div>
        <div class="nav-container">
          <ul class="flex nav-ul">
            <li>
              <router-link class="link" :to="{ name: '' }"
                >Business Manager</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }"
                >MarketPlace</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }">XooCam</router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }" class="profile-menu link"
                >Join Peexoo<i class="fa fa-sort-desc" aria-hidden="true"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
  background-color: var(--bg-white);
}

.navbar {
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  font-family: var(--font-poppins);
  counter-reset: item 0;
  z-index: 12;
  color: var(--nav-secondary-color);
  padding: 23px 30px;
}

.navbar .logo {
  height: 26px;
}

.navbar .link {
  padding: 10px;
  margin: 0 5px;
  display: inline-flex;
}

.navbar ul li:last-child {
  padding: 0 0 0 120px;
  color: var(--primary-color);
}

.navbar .flex {
  justify-content: space-between;
}

.nav-link ul {
  display: flex;
  list-style: outside none none;
}

.profile-menu i {
  color: rgba(145, 145, 145, 1);
  padding-left: 6px;
}
</style>
