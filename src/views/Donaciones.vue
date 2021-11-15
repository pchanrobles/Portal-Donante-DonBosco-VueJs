<template>
  <div>
    <div style="color: #dc001b; text-align: center">
      <h2>TUS DONATIVOS</h2>
    </div>

    <a href="https://donboscosalesianos.social/haz-un-donativo/" target="_blank"
      ><v-card-actions style="display: flex; justify-content: center">
        <v-btn style="background-color: #dc001b; color: white">
          CLICK PARA DONAR
        </v-btn>
      </v-card-actions></a
    >
<!-- table -->
<v-container>
  <v-layout>
    <v-flex>
 <v-card>
      <v-card-title style="color: #dc001b">
        Tus Aportaciones
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="aportaciones"
        :search="search"
      ></v-data-table>
    </v-card>
    </v-flex>
  </v-layout>
</v-container>
<!-- table -->
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Ultimas Donaciones (Aportaciones)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Periodicidad", value: "periodicidad" },
        { text: "Cuota", value: "cuota" },
        { text: "TOTAL", value: "total"},
      ],
      aportaciones: [
        {
          name: "Enero",
          periodicidad: "mensual",
          cuota: 300,
          total: 300,
        },
        {
          name: "Febrero",
          periodicidad: "mensual",
          cuota: 300,
          total: 600,
        },
        {
          name: "Marzo",
          periodicidad: "mensual",
          cuota: 300,
          total: 900,
        },

        
      ],
    };
  },
};
</script>
<style>
.auto {
  margin-left: 16%;
  margin-right: 16%;
}
</style>