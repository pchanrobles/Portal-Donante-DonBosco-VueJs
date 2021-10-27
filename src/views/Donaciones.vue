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
    <v-card class="mx-auto" max-width="1000" tile>
      <v-layout justify-center>
        <v-toolbar color="#DC001B ">
          <v-toolbar-title style="color: white"
            ><v-card-text
              >Hola, <br />
              Nombre de Usuario</v-card-text
            >
          </v-toolbar-title>
        </v-toolbar>
      </v-layout>
      <v-list rounded>
        <v-subheader>REPORTE DE DONATIVOS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon style="margin-left: 25px">
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content style="margin-left: 25px;">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content class="auto" >
              <v-list-item-title v-text="item.tipo"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title v-text="item.cantidad"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title v-text="item.total"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      {
        text: "Ultimas Cuotas",
        icon: "fas fa-hand-holding-heart",
        tipo: "mensual",
        cantidad: "100",
      },
      {
        text: "Ultimas Cuotas",
        icon: "fas fa-hand-holding-heart",
        tipo: "mensual",
        cantidad: "100",
      },
      {
        text: "Ultimas Cuotas",
        icon: "fas fa-hand-holding-heart",
        tipo: "mensual",
        cantidad: "100",
      },
       {
       
        icon: "",
        tipo: "",
         text: "Total Aportaciones",
        cantidad: "300",
      },
    ],
  }),
};
</script>

<style>
.auto{
  margin-left: 16%;
  margin-right: 16%;
 
  
}
</style>