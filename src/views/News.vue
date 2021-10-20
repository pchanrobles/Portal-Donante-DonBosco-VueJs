<template>
    <div>
        <v-card v-for="entrada in entradas" :key="entrada.id" color="#DC001B" style="margin-bottom: 8px;" dark>
            <v-card-title class="text-h5"> {{ entrada.title.rendered }} </v-card-title>

            <v-card-subtitle v-html="entrada.excerpt.rendered">
                {{ entrada.excerpt.rendered }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn style="background-color: #DC001B">
                    <a :href="entrada.link" style="color: white; ">Leer más</a>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

 <script>
 import axios from 'axios'
  axios.defaults.baseURL = 'http://localhost:81/wordpress'
export default {
  data: () => ({
    entradas: [],
  }),

  computed: {
    
  },

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
      //console.log(this.entradas);
    },
  },
};
</script>

<style>

</style>