<template>
  <div class="wrapper-container">
    <transition name="card-nav">
      <div class="card" v-show="!cardHidden">
        <!-- <div class="hide-button">
          <button @click="showCard">Hide</button>
        </div> -->
        <div class="large-profile-container">
          <div @click.stop="displayModal = true" class="large-pic-holder">
            <img src="@/assets/profile.jpeg" alt="Profile picture" />
          </div>
        </div>
        <div class="profile-caption">
          <h1>Ekemini Mark</h1>
          <p>
            I'm a wedding and portrait photographer based in Lagos Nigeria. I've
            been shooting weddings since I was in high school (before I
          </p>
        </div>
        <div class="profile-stats">
          <div class="stats-details">
            <h2>22.1k</h2>
            <p>Total View</p>
          </div>
          <div class="stats-details center">
            <h2><i class="fa fa-heart-o" aria-hidden="true"></i>13.1k</h2>
            <p>Total Likes</p>
          </div>
          <div class="stats-details">
            <h2>Sony 927</h2>
            <p>Camera Lens</p>
          </div>
        </div>
        <div class="profile-info">
          <div class="profile-category">
            <h3>Category</h3>
            <p><i class="fa fa-circle"></i>Food</p>
            <p><i class="fa fa-circle"></i>Portrait</p>
            <p><i class="fa fa-circle"></i>Wedding</p>
            <p><i class="fa fa-circle"></i>Model</p>
          </div>
          <div class="profile-contact">
            <h3>Location</h3>
            <p>Lagos, Nigeria</p>
          </div>
          <div class="profile-link">
            <span
              ><i
                class="fa fa-share-alt fa-flip-horizontal"
                aria-hidden="true"
              ></i
              ><a href="#">www.peexoo.ai/anijohnson</a></span
            >
          </div>
          <div class="social-button">
            <ul>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-envelope" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
            <a href="#">Book Now</a>
          </div>
          <div class="social-footer">
            <p>
              Built
              <span
                ><i class="fa fa-heart fa-gradient" aria-hidden="true"></i
              ></span>
              on Peexoo
            </p>
          </div>
        </div>
      </div>
    </transition>
    <div class="modal-overlay" v-if="displayModal">
      <button @click="displayModal = false" class="close-button">
        Close Image
      </button>
    </div>

    <div class="modal" v-if="displayModal">
      <div class="modal-guts">
        <div class="modal-content large-profile-container">
          <div class="view-image-container">
            <img :src="image" alt="Profile picture" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="tab-nav">
        <!-- <div class="profile-container" v-show="cardHidden">
          <div class="pic-holder" @click="cardHidden = false">
            <a href="#">
              <img src="@/assets/profile.jpeg" alt="Profile picture" />
            </a>
          </div>
          <h1><a href="#" @click="cardHidden = false">Show Card</a></h1>
        </div> -->
        <div class="tab-link">
          <ul class="flex">
            <li>
              <router-link class="link" :to="{ name: 'Home' }"
                >Portfolio</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'Availability' }"
                >Availability</router-link
              >
            </li>
            <li>
              <router-link class="link active" :to="{ name: 'Pricing' }"
                >Pricing Package</router-link
              >
            </li>
          </ul>
        </div>
      </section>

      <section class="table-container">
        <table id="packages">
          <thead>
            <tr>
              <th v-for="col in columns" :key="col.title">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.title">
              <td v-for="col in columns" :key="col.title">
                <router-link :to="{ name: 'PricingDetails' }">{{
                  row[col]
                }}</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
const images = ["http://localhost:8081/img/profile.d8f115ef.jpeg"];
export default {
  name: "PricingCard",
  data() {
    return {
      index: 0,
      image: images[0],
      displayModal: false,
      cardHidden: null,
      rows: [
        {
          title: "Wedding Classic",
          category: "Wedding",
          items: "15",
          "date created": "5th Sept, 2020",
          amount: "N350,000",
        },
        {
          title: "Beauty Campaign",
          category: "Beauty",
          items: "2",
          "date created": "5th Sept, 2020",
          amount: "N45,000",
        },
        {
          title: "Prewedding Gold",
          category: "Wedding",
          items: "5",
          "date created": "5th Sept, 2020",
          amount: "N45,000",
        },
        {
          title: "Culinary Photography",
          category: "Food",
          items: "18",
          "date created": "5th Sept, 2020",
          amount: "N75,000",
        },
      ],
    };
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    },
  },
  methods: {
    showCard() {
      this.cardHidden = !this.cardHidden;
    },
    next() {
      this.index = (this.index + 1) % images.length;
      this.image = images[this.index];
    },
    prev() {
      this.index = (this.index - 1) % images.length;
      this.image = images[this.index];
    },
    onClickOutsode(e) {
      if (e.target.localName !== "button") {
        this.displayModal = false;
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.onClickOutsode);
  },
};
</script>

<style lang="scss" scoped>
.tab-nav {
  padding: 14px 0px;
}

.profile-container {
  display: flex;
  align-items: center;
  height: 46px;
  width: 30%;
}

.profile-container h1 {
  margin: 0 0 0 6px;
  font-weight: 400;
  font-size: var(--fs-md);
  color: var(--primary-color);
  letter-spacing: -0.22px;
}

.pic-holder {
  width: 46px;
  overflow: hidden;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.pic-holder a {
  width: 100%;
}

.pic-holder img {
  height: 46px;
  object-fit: cover;
}

.tab-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab-link {
  width: 70%;
}

.tab-nav ul {
  justify-content: flex-start;
}

.tab-link a {
  padding: 10px 22px;
  margin: 0 5px;
  color: var(--secondary-color);
}

.active {
  color: var(--secondary-color);
  font-weight: 600;
  background-color: rgba(242, 159, 5, 0.1);
  border: 1px solid rgba(242, 159, 5, 0.1);
  border-radius: 19px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
  -ms-border-radius: 19px;
  -o-border-radius: 19px;
}

.grid-container {
  padding: 25px 0;
  columns: 3 10rem;
  column-gap: 1rem;
}

.img-container {
  margin-bottom: 1rem;
}

.img-container img {
  width: 100%;
  border-radius: 1rem;
}

.wrapper-container {
  display: flex;
  position: absolute;
  width: 100%;
}

/* .load-image {
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    margin: 0.3em;
    height: 10em;
    width: 10em;
} */

.image-grid {
  display: grid;
  gap: 1em;
  grid-auto-rows: 10em;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-auto-flow: dense;
}

.load-image {
  border-radius: 10px;
  background-size: cover;
  background-position: center;
}

.load-image:nth-child(6n) {
  grid-column: span 2;
  grid-row: span 2;
}

.load-image:nth-child(7n) {
  grid-column: span 2;
}

.load-image:nth-child(8n) {
  grid-row: span 2;
}

.card {
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  padding: 18px;
  margin: 0 0 0 52px;
  width: 45.8%;
  display: flex;
  flex-direction: column;
  border: 0.25px solid rgba(255, 181, 0, 1);
  border-radius: 4px;
  position: relative;
  top: -116px;
  height: max-content;
  /* height: max-content; */
}

.hide-button {
  display: flex;
  justify-content: flex-end;
}

.hide-button button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--fs-sm);
  color: var(--primary-color);
}

.container {
  width: 100%;
  padding: 0;
  margin: 0;
}

.large-profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 114px;
  margin-top: 4px;
}

.large-pic-holder {
  width: 114px;
  height: 114px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.large-pic-holder a {
  width: 100%;
}

.large-pic-holder img {
  height: 114px;
  object-fit: cover;
}

.profile-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-caption h1 {
  font-weight: 600;
  font-size: var(--fs-large);
  color: var(--secondary-color);
  margin-top: 10px;
}

.profile-caption p {
  text-align: center;
  letter-spacing: -0.26px;
  padding: 0 10px;
}

.profile-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px 0 30px 0;
}

.profile-stats h2 {
  font-size: var(--fs-lg);
  color: var(--secondary-color);
  margin: 0px 0px 2px;
}

.profile-stats p {
  font-size: var(--fs-sm);
  color: var(--nav-secondary-color);
}

.stats-details i {
  margin-right: 4px;
}

.profile-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: -0.26px;
  width: 100%;
}

.profile-category h3 {
  font-size: var(--fs-lg);
  font-weight: 400;
  color: rgba(77, 77, 77, 0.6);
  margin: 0px 0px 2px;
}

.profile-category p {
  display: flex;
  align-items: center;
}

.profile-category i {
  font-size: 7px;
  padding-right: 7px;
}

.profile-contact {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 11px 0 0 0;
}

.profile-contact h3 {
  font-size: var(--fs-lg);
  font-weight: 400;
  color: rgba(77, 77, 77, 0.6);
  margin: 0px 27px 0 0;
}

.profile-link {
  margin-top: 45px;
}

.profile-link i {
  color: var(--primary-color);
  margin-right: 7px;
}

.social-button {
  margin-top: 21px;
  display: flex;
}

.social-button a {
  padding: 9px 21px;
  color: var(--bg-white);
  background-color: var(--primary-color);
  border-radius: 100px;
}

.social-button ul {
  display: flex;
}

.social-button ul li {
  padding-right: 11px;
}

.social-button ul li a {
  display: flex;
  border-radius: 50%;
  height: 38px;
  width: 37px;
  align-items: center;
  justify-content: center;
  background-color: rgba(228, 228, 228, 0.3);
}

.social-button a:hover,
.social-button a:focus {
  color: var(--secondary-color) !important;
}

.social-button ul li a:hover,
.social-button ul li a:focus {
  background-color: var(--primary-color);
}

.social-button i {
  color: rgba(0, 0, 0, 1);
}

.social-button .icons a {
  border-radius: 50%;
  height: 38px;
  width: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-footer {
  margin-top: 41px;
}

.social-footer i:before {
  background: transparent
    linear-gradient(
      180deg,
      rgba(255, 121, 121, 1) 0%,
      rgba(255, 168, 29, 1) 100%
    )
    0% 0% no-repeat padding-box;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.modal {
  display: block;
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  background: var(--overlay-color);
}
.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay .close-button {
  position: absolute;
  z-index: 1;
  top: 43px;
  right: 45%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 19px;
  background: rgba(0, 0, 0, 0.5);
  color: var(--bg-color);
  padding: 10px 12px;
  font-size: var(--fs-sm);
  cursor: pointer;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
  -ms-border-radius: 19px;
  -o-border-radius: 19px;
}

.view-image-container {
  width: 344px;
  height: 344px;
  overflow: hidden;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.view-image-container img {
  height: 100%;
  object-fit: cover;
}

.modal-content,
.card {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
  transition: 0.2s ease-in-out;
}

.d-none {
  display: none;
  -webkit-animation-name: zoomout;
  -webkit-animation-duration: 0.6s;
  animation-name: out;
  animation-duration: 0.6s;
  transition: 0.2s ease-in-out;
}

// .container {
//   animation: zoom 1s ease-in-out;
//   -webkit-animation: zoom 1s ease-in-out;
//   transition: 0.2s ease-in-out;
//   -webkit-transition: 0.2s ease-in-out;
//   -moz-transition: 0.2s ease-in-out;
//   -ms-transition: 0.2s ease-in-out;
//   -o-transition: 0.2s ease-in-out;
// }

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@-webkit-keyframes zoomout {
  from {
    -webkit-transform: scale(1);
  }
  to {
    -webkit-transform: scale(0);
  }
}

@keyframes zoomout {
  from {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
  to {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }
}

#packages {
  margin-top: 18px;
  border-collapse: collapse;
  width: 100%;
  font-size: var(--fs-sm);
  color: var(--nav-secondary-color);
}

#packages th {
  padding: 12px 18px;
}

#packages td:nth-child(3),
td:nth-child(4) {
  text-align: center;
}

#packages td:nth-child(5),
#packages th:nth-child(5),
#packages th:nth-child(4) {
  text-align: center;
}

#packages tbody tr:hover {
  background-color: var(--bg-white);
  cursor: pointer;
}

#packages tbody td a {
  padding: 12px 18px;
  width: 100%;
}

#packages tbody td a:hover {
  color: inherit !important;
}

#packages th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(242, 159, 5, 0.1);
  color: var(--secondary-color);
  font-size: var(--fs-sm);
  text-transform: capitalize;
}
</style>