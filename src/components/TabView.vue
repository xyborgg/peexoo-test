<template>
    <div class="container">
        <section class="tab-nav">
            <div class="profile-container" v-show="!cardHidden">
                <div class="pic-holder" @click="cardHidden = true">
                    <a href="#">
                        <img src="@/assets/profile.jpeg" alt="Profile picture">
                    </a>
                </div>
                <h1><a href="#" @click="cardHidden = true">Show Card</a></h1>
            </div>
            <div class="tab-link">
                <ul class="flex">
                    <li><a class="active" href="#">Portfolio</a></li>
                    <li><a href="avalabitilty.html">Availability</a></li>
                    <li><a href="pricing.html">Pricing Package</a></li>
                </ul>
            </div>
        </section>
        
        <section class="grid-container">
            <div class="img-container">
                <img src='https://picsum.photos/id/10/500/400' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/20/200/400' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/30/600/500' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/40/100/250' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/50/200/400' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/60/250/500' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/70/800/200' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/80/200/350' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/90/400/350' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/100/500/350' alt=''>
            </div>
            <div class="img-container">
                <img src='https://picsum.photos/id/110/700/350' alt=''>
            </div>
        </section>

        <!-- <section id="loadImage" class="image-grid">
        
            <script>
                for (let i = 0; i <= 8; i++) {
                    const div = document.createElement('div');
                    div.className = 'load-image';
                    div.style.backgroundImage = `url(https://picsum.photos/500/500?random=${i})`;
                    document.getElementById("loadImage").appendChild(div);
                }

            </script>
        </section> -->
    </div>
</template>

<script>
export default {
    name: "Tabview",
    data() {
        return {
            cardHidden: null,
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
.tab-nav {
    padding: 14px 70px;
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
    border: 1px solid rgba(242, 159, 5, 0.1) ;
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
</style>