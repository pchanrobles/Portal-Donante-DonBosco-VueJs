<template>
  <div>
    <v-layout justify-center>
      <v-toolbar color="gray ">
        <v-toolbar-title style="color: #dc001b"
          ><h4 style="margin-left: 225px; padding: 225px">
            Noticias Fundacion Don Bosco
          </h4></v-toolbar-title
        >
      </v-toolbar>
    </v-layout>
    <v-img><img class="img" src="../assets/refugiados.png" /></v-img>
    <v-card
      v-for="entrada in entradas"
      :key="entrada.id"
      color="#DC001B"
      style="margin-bottom: 8px"
      dark
    >
      <v-card-title class="text-h5">
        {{ entrada.title.rendered }}
      </v-card-title>

      <v-card-subtitle
        v-if="!readMoreActivated"
        v-html="entrada.content.rendered.slice(0, 250) + '...'"
      >
        <span v-if="readMoreActivated" v-html="longText"></span>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn style="background-color: #dc001b">
          <a target="_blank" :href="entrada.link" style="color: white"
            >Leer más</a
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

 <script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:81/wordpress";
export default {
  data: () => ({
    entradas: [],
    readMore: false,

    config: {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dvcmRwcmVzcy1hcGlcL2FwaV9kb25hbnRlc19ib3NjbyIsImlhdCI6MTYzNTQ5ODg2NCwibmJmIjoxNjM1NDk4ODY0LCJleHAiOjE2MzYxMDM2NjQsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.0z_UWDRkq5jkcCSJrRMq-zOBBUlaeGXIMmQi6_P6XOo",
      },
    },
  }),

  computed: {},

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const entradasDB = await axios.get("/wp-json/wp/v2/posts");
      // console.log(entradasDB.data);
      await entradasDB.data.forEach((element) => {
        // console.log(element);
        let item = element;

        this.entradas.push(item);
      });
      console.log(this.entradas);
    },
  },
};
</script>

<style>
.img {
  width: 100%;
  height: 300px;
}
</style>