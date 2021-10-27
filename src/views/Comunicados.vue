<template>
<v-card
    class="mx-auto"
  >
    <v-list
      two-line
    >
      <v-list-item @click="linkPdfOpen">
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
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
        this.title = respuesta.data[0].name;
       this.subtitle = respuesta.data.created_at = new Date().toLocaleString();
        console.log(respuesta.data[0]);
        let linkPdf =respuesta.data[0].file_path
        return linkPdf 
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    linkPdfOpen(){
      window.open("http://localhost:8000" + this.linkPdf, '_blank')
    }
  },
  components: {
    pdf,
  },
  data() {
    return {
      linkPdf: "",
          subtitle: "",
          title: '',
    };
  },
};
</script>

<style>
.container {
  width: 100%;
}
</style>