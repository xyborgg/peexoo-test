<template>
  <div>
    <Banner />
    <Availability />
  </div>
</template>

<script>
import Availability from '@/components/Availability.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'availability',
  components: {
    Availability,
    Banner,
  },
};
</script>