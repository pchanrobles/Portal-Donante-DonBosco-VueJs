<template>
  <v-card
  class="mx-auto"
    max-width="344"
  >
    <v-card-text>
     
      <p class="text-h4 text--primary">
        🔑{{donante.tipoDocumento + " " + donante.documento}}
      <p>Nombre:{{" " +donante.donante.name}}</p>
      <p>Apellidos:{{" " +donante.donante.lastName}}</p>
      <p>🗺:{{" " +donante.donante.selectorPais}}</p>
      <p>Provincia:{{" " +donante.donante.provincia}}</p>
      <p>CP:{{" " +donante.donante.cp}}</p>
      <p>Cuota:{{" " +donante.donante.tipoCuota + " "+ donante.donante.cuota + "€"}}</p>
      <p>📞:{{" " + donante.donante.phoneNumber}}</p>
  </v-card-text>
   

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>


export default{
  props:{
    donante: {
      type:Object,
      required:true
    }
  }, 
  
}
</script>

<style lang="scss" scoped>
.v-application .text-h4 {
  font-size: 1.125rem !important;
}

.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
   margin-top: 20px;
    border: #DC001B 5px solid;
    background-color: #DADCDE;
    color:currentcolor;;
    font-weight: bold;
    }
    .theme--light.v-application .text--primary {
    
    color: #DC001B !important;;
}
</style>