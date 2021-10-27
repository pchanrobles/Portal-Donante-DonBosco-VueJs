<template>
<v-app>
<div class="box">
  <div class="container-4">
    <input type="search" id="search" placeholder="Buscar Donantes por DNI..." />
    <button class="icon"><i class="fa fa-search"></i></button>
    
  </div>
  <br>
  <br>

   <Tarjeta :donante="donante" v-for="donante in donantes" :key="donante.id" />
   
</div>
</v-app>
</template>
<script>

import Tarjeta  from '../components/Tarjeta.vue'
import DonantesService from '@/services/DonantesService.js'
export default{
    components:{
        Tarjeta
    },
    data(){
        return {
            donantes:null
        }
    },
    created(){
        DonantesService

        .getDonantes()

        .then(respuesta =>{
        this.donantes = respuesta.data;
         
        })

        .catch(error =>{
            console.log(error)
        })
    }
  
}
</script>

<style scoped>

.container-4{
    color:red;
    display:flex;
    justify-content: center;
    margin-top:30px;
    
}
.icon{
    color:red
}
.buscador{
    color:red;
}
.formulario{
    color:blue;
}
</style>
