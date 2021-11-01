<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on">
          Enviar Modificación de datos
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> SOLICITUD DE CAMBIO</span>
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
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
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
    };
  },
};
</script>
