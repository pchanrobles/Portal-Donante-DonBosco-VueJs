<template>
  <div>
    
  </div>
</template>
<script>
Vue.use(Vuetify);

import Vue from "vue";
import Vuetify from "vuetify/lib";
import Releases from '../components/Releases.vue';



export default {
  components: {
        Releases,
    
   
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>


