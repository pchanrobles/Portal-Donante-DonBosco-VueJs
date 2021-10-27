<template>
  <v-app>
    <div class="box">
      <div class="container-4">
        <input
          type="search"
          id="search"
          placeholder="Buscar Donantes por DNI..."
          v-model="buscador"
          @keyup="buscarDonante"
        />
        <button class="icon"><i class="fa fa-search"></i></button>
      </div>
      <br />
      <br />

      <Tarjeta
        :donante="donante"
        v-for="donante in getDonantes"
        :key="donante.id"
      />
    </div>
  </v-app>
</template>
<script>
import Tarjeta from "../components/Tarjeta.vue";

export default {
  components: {
    Tarjeta,
  },
  data() {
    return {
      buscador: "",
      setTimeoutBuscador: "",
    };
  },
  created() {
      this.changeDonantes();
  },
  computed: {
    getDonantes() {
        return this.$store.state.donantes
    },
  },
  methods: {
    changeDonantes() {
      this.$store
        .dispatch("getDonantes")
        .catch((err) => {
          this.$fire({
            title: "Error al consultar el servidor",
            type: "error",
            timer: 4000,
          });
          console.log(err);
        });
    },
    buscarDonante(e) {
      if (e.target.value.length >= 3) {
        this.$store
        .dispatch("byDocument", e.target.value)
        .catch((err) => {
          this.$fire({
            title: "Error al consultar el servidor",
            type: "error",
            timer: 4000,
          });
          console.log(err);
        });
      } else if ( e.target.value.length === 0 ) {
          this.changeDonantes();
      }
    },
  },
};
</script>

<style scoped>
.container-4 {
  color: red;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.icon {
  color: red;
}
.buscador {
  color: red;
}
.formulario {
  color: blue;
}
</style>
