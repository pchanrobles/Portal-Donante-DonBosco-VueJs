<template>
  <div>
    <v-layout justify-center>
      <v-toolbar color="gray ">
        <v-toolbar-title style="color: #dc001b"
          ><h1 style="margin-left: 225px; padding: 225px; margin-top: 30px; margin-bottom: 30px;">
            Noticias Fundacion Don Bosco
          </h1></v-toolbar-title
        >
      </v-toolbar>
    </v-layout>
    <v-layout><div><h3 style="color:#dc001b; margin-top: 20px;">NOTICAS</h3></div></v-layout>
    <v-card
      v-for="entrada in entradas"
      :key="entrada.id"
      color="#DC001B"
      style="margin-bottom: 10px; margin-top: 12px;"
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
axios.defaults.baseURL = "http://localhost:81/wordpress-api/mi-api-2/";
export default {
  data: () => ({
    entradas: [],
    readMore: false,

    config: {
      headers: {
                  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dvcmRwcmVzcy1hcGlcL21pLWFwaS0yIiwiaWF0IjoxNjM1ODQzNTM2LCJuYmYiOjE2MzU4NDM1MzYsImV4cCI6MTYzNjQ0ODMzNiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.XG_U21iOPCWggM4oLUtrRHiL19_bJr8nvAMBQ0jkIb0',
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