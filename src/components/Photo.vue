<template>
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
  </div>
  <!-- <div class="lightbox" @click.self="closeLightbox">
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
</template>
<script>
import photos from '@/photos.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
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
  },
};
</script>
<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;
  }
  .lightbox-info {
    margin: auto 2rem auto 0;
  }
  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
  }

  .modal {
  /* This way it could be display flex or grid or whatever also. */
  display: flex;

  /* Probably need media queries here */
  width: 600px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;

  position: fixed;

  z-index: 100;
  left: 50%;
  top: 50%;

  /* Use this for centering if unknown width/height */
  transform: translate(-50%, -50%);
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
  /*don'tneedtogocrazywithz-indexhere,justsitsover.modal-guts*/
  z-index: 1;
  top: 43px;
  /*needstolookOKwithorwithoutscrollbar*/
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
</style>