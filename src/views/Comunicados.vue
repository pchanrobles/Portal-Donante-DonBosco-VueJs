<template>
<v-card
    class="mx-auto"
  >
    <v-list
      two-line
    >

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.title"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>

</template>

<script>
import pdf from "vue-pdf";
import DonantesService from "../services/DonantesService.js";

export default {
  created() {
    DonantesService.getPdf()

      .then((respuesta) => {
       this.subtitle = respuesta.data.created_at = new Date()
        console.log(respuesta.data[0]);
        console.log(respuesta.data.created_at = new Date());
      })

      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    pdf,
  },
  data() {
    return {
      folders: [
        {
          subtitle: "",
          title: '',
        },
      ],
    };
  },
};
</script>

<style>
.container {
  width: 100%;
}
</style>