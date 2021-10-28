<template>
  <v-card class="mx-auto">
    <v-list two-line>
      <v-list-item
        v-for="folder in folders" :key="folder.id"
        @click="linkPdfOpen(folder.file_path)"
      >
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark>
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            :items="folder"
            v-text="folder.name"
          ></v-list-item-title>

          <v-list-item-subtitle
            :items="folder"
            v-text="new Date(folder.created_at).toLocaleString()"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action> </v-list-item-action>
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
        this.folders = respuesta.data;
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
      folders: null
    };
  },
  methods: {
    linkPdfOpen(link) {
      let linkNewWindow = "http://localhost:8000" + link;
      window.open(linkNewWindow, "_blank");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
}
</style>
