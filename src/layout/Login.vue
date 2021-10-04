<template>

  <div id="app">
     <div>
    <v-btn color="blue" text> <a href="/"><i class="fas fa-arrow-circle-left"></i> INICIO</a>           
              </v-btn>
  </div>
  <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                 <div><h4 class="donante">PORTAL DONANTE</h4>   <v-img class="bosco" src="@/assets/bosco.png" alt="imagen Don bosco"></v-img></div>
                
                </h3>
               
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Inicie sesión</p>
        

              <v-form>
                <v-text-field
                              outline
                              label="DNI"
                              type="text"
                              v-model="dni"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Contraseña"
                              type="Contraseña"
                              v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <div style="display:flex; flex-direction:column; align-items:center;">
                    <div style="display:flex; justify-content:space-between; width:100%; 
                    align-items:center;">
                     
                        <v-checkbox label="Recordar contraseña"></v-checkbox>
                        
                        <v-btn  @click="show" color="info" :large="$vuetify.breakpoint.smAndUp">
                            Login
                        </v-btn>
                    </div>

                    <v-spacer></v-spacer>
                    
                    <v-btn @click="redirectToForgot" color="info" text>
                        ¿Se te olvidó tu contraseña?
                    </v-btn>
                    <v-btn @click="redirectToRegister" color="info" text>
                        Registrarse
                    </v-btn>

                        
                     
      <div class="d-flex align-items-center">
       <v-checkbox></v-checkbox>
      <a href="https://fundaciondonbosco.es/politica-privacidad/" target="_blank">Política de Privacidad de Datos</a>
      </div>
            

 
                    

                </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm12 md6 offset-md3>
          <v-layout align-center justify-space-between>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
                                

</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
data () {
    return {
      darkTheme: true,
      platformName: 'Platform name',
      password: null,
      dni: null
    }
  },
  methods: {
    login(){
      let data = {
        email: this.dni,
        password: this.password
      }
      AuthService.login(data)
      .then(res =>{
        console.log(res)
        localStorage.setItem('TokenFIRE',res.data.token)
        localStorage.setItem('Usuario',res.data.Usuario.name)
        })
        .catch((errors) => {
          console.log(errors);
        })
    },
    show(){
      console.log(this.dni, this.password)
    },
    redirectToForgot(){
      this.$router.push({
        path: "/forgot"
      })
    },
    redirectToRegister(){
      this.$router.push({
        path: "/register"
      })
    },
  }
  }
   
</script>

<style>
.check {
width:30px;
height:30px;
}
.v-application--wrap{
  justify-content: center !important;
  background-color:#DADCDE;
}
.bosco{
  height: 20%;
  width: 20%;
  position: relative;
  left: 38%;
}
.donante{
   
    color:#DC001B ;
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    line-height: normal;
    position: relative;
    transition: inherit;
    
}
.v-input--selection-controls{
  margin: 0!important;
  padding: 0!important;
}
.v-card__actions {
    display: block;
 }
 .layout{
   display: unset !important;
 }
 
</style>