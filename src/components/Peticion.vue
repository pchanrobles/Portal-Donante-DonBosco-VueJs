<template>
  <v-card class="mx-auto" max-width="500px" margin-top="50px" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Peticion de Registro
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ details.documento }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ details.details }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text>
        Aceptar
      </v-btn>
      <v-btn outlined rounded text>
        Denegar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
   props:{
    details: {
      type:Object,
      required:true
    }
  }, 
};
</script>

<style scoped>
.mx-auto {
  display: flex;
}
</style>
