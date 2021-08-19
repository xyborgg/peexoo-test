<template>
    <div class="gallery-grid">
        <lightbox :lightboxInfo="lightboxData"/>
    </div>
</template> 
<script>
import Lightbox from '../components/Lightbox.vue'
export default {
    components: {
        Lightbox,
    },
    data() {
        return {
            lightboxData: [
                {
                    thumbnail: '1.jpg',
                    alt: 'thumbnail 1',
                    lb: 'lb/1.jpg',
                    caption: 'title one'
                },
                    {
                    thumbnail: '2.jpg',
                    alt: 'thumbnail 2',
                    lb: 'lb/2.jpg',
                    caption: 'title two'
                },
                    {
                    thumbnail: '3.jpg',
                    alt: 'thumbnail 3',
                    lb: 'lb/3.jpg',
                    caption: 'title 3'
                },
                {
                    thumbnail: '4.jpg',
                    alt: 'thumbnail 4',
                    lb: 'lb/4.jpg',
                    caption: 'title 4'
                }
            ]
        }
    } 
}
</script>
<style lang="scss">
    .gallery-grid { 
        display:flex; 
            .lightbox__thumbnail { 
                width: 200px; margin: 5px; cursor: pointer; 
            } 
    } 
</style>