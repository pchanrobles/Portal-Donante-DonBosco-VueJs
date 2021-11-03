<template>
  <div>
     <Peticion :details="detail"
     v-for="detail in this.$store.state.details" 
     :key="detail.id" />
      
  </div>
</template>

<script>
import Peticion from "../components/Peticion.vue";

export default {
  data() {
    return {
      request: [],
    };
  },
  components: {
    Peticion,
  },
  created() {
    this.getPeticiones();
  },

  methods: {
    getPeticiones() {
      this.$store
        .dispatch("request")
        .then(() => {
          
        })

        .catch((err) => {
          console.log(err);
          this.$fire({
            title: "Error al enviar.",
            type: "error",
            timer: 4000,
          });
        });
    },
  },
};
</script>
