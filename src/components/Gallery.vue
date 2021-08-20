<template>
  <!-- <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
      </router-link>
    </div>
  </div>

  <div class="modal-overlay">
    <button @click="displayModal = false" class="close-button">
      Close Image
    </button>
  </div>

  <div class="modal">
    <img :src="photoUrl(photo.filename)">
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v-if="photo.photographer">
          <a rel="nofollow" :href="photo.photographer.url">{{ photo.photographer.name }}</a>
        </p>
        <p v-if="photo.source">
          via <a rel="nofollow" :href="photo.source.url">{{ photo.source.name }}</a>
        </p>
      </div>
    </div>
  </div> -->
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <router-link :to="`/Photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
      </router-link>
    </div>
  </div>
    <div class="img-container" v-for="photo in photos" :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
      </router-link>
    </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  name: 'Gallery',
  data() {
    return {
      photos,
      displayModal: false,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$router.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
        this.$router.push('/');
    },
    displayGallery() {
        this.$emit(this.$router = true)
    },
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },
};
</script>
<style lang="scss" scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }

  // .gallery-panel {
  //   height: 234px;
  //   width: 196px;
  // }

  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>
