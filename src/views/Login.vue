<template>

   
    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container style="margin-top:60px;">
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    <div>
                      <v-img style="display: flex !important;
                                    margin-left: 40%;
                                    justify-content: center !important; 
                                    height: 20% !important; 
                                    width: 20% !important;"
                        src="@/assets/bosco.png"
                        alt="imagen Don bosco"></v-img>
                      <h4 style="color: #dc001b; text-align: center; font-family: MONTSERRAT">PORTAL DONANTE</h4>
                    </div>
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
                    v-model="dni"
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Contraseña"
                    type="Contraseña"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      width: 100%;                      
                      align-items: center;">
                    <v-checkbox label="Recordar contraseña"></v-checkbox>

                    <v-btn
                      @click="show"
                      color="info"
                      :large="$vuetify.breakpoint.smAndUp">
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
                     <a href="https://fundaciondonbosco.es/politica-privacidad/"
                      target="_blank"> Política de Privacidad de Datos</a>
                  </div>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
            <v-layout align-center justify-space-between> </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
    
 
</template>

<script>

import AuthService from "@/services/AuthService.js";
export default {
  components: {
   
  },
  data() {
    return {
      darkTheme: true,
      platformName: "Platform name",
      password: null,
      dni: null,
    };
  },
  methods: {
    login() {
      let data = {
        email: this.dni,
        password: this.password,
      };
      AuthService.login(data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("TokenFIRE", res.data.token);
          localStorage.setItem("Usuario", res.data.Usuario.name);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    show() {
      console.log(this.dni, this.password);
    },
    redirectToForgot() {
      this.$router.push({
        path: "/forgot",
      });
    },
    redirectToRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style>
.check {
  width: 30px;
  height: 30px;
}

.layout {
  display: unset !important;
}
</style>