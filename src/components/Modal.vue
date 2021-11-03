<template>
  <v-row justify="center">
    <br /><br />
    <v-dialog class="modale" v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on">
          Enviar Modificación de datos 🖊
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> SOLICITUD DE CAMBIO DE DATOS</span>
          <span class="text-h5"
            >Introduce tus datos a modificar de la siguiente <br />
            manera:<br />
            -Teléfono: 648140886
            <br />
            -Email: ejemplo@ejemplo.com
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-textarea
                v-model="details"
                background-color="grey lighten-2"
                color="red"
                label="Escribe los datos que quieres modificar aquí."
              ></v-textarea>
            </v-row>
          </v-container>
          <small>*El administrador revisara tus datos.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn @click="requestDonantesInfo()" color="blue darken-1" text>
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false,
      details: "",
    };
  },
  methods: {
    requestDonantesInfo() {
      this.dialog = false;
      const tmp = {details: this.details, id: this.$store.state.user.id };
      this.$store.dispatch("requestDonantesInfo", tmp).then(() => {
        this.$fire({
          title: "Se ha procesado su petición.",
          type: "success",
          timer: 4000,
        });
      }).catch((err) => {
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
<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 36 px;
  min-width: 64 px;
  padding: 0 16 px;
  margin-bottom: 18 px;
  margin-top: 10 px;
}
</style>
