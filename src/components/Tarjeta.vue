<template>
  <v-card
  class="mx-auto"
    max-width="344"
  >
    <v-card-text>
     
      <p class="text-h4 text--primary">
        🔑{{donante.tipoDocumento + " " + donante.documento}}
      <p>Nombre:{{" " + donante.donante.name}}</p>
      <p>Apellidos:{{" " + donante.donante.lastName}}</p>
      <p>🗺:{{" " +donante.donante.selectorPais}}</p>
      <p>Provincia:{{" " + donante.donante.provincia}}</p>
      <p>CP:{{" " +donante.donante.cp}}</p>
      <p>Cuota:{{" " +donante.donante.tipoCuota + " "+ donante.donante.cuota + "€"}}</p>
      <p>📞:{{" " + donante.donante.phoneNumber}}</p>
  </v-card-text>
   

  
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