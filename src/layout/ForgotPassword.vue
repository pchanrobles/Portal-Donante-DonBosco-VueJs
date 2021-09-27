<template>
  <div id="app">
    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    <div>
                      <h4 class="donante">PORTAL DONANTE</h4>
                      <v-img
                        class="bosco"
                        src="../assets/bosco.png"
                        alt="imagen Don bosco"
                      ></v-img>
                    </div>
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-btn color="info" text> Restablecer contraseña </v-btn>
                
                <v-form>
                  <v-text-field
                    outline
                    hide-details
                    label="DNI"
                    type="text"
                    v-model="password"
                  ></v-text-field>

                  

                  <v-text-field
                    outline
                    label="Email"
                    type="text"
                    v-model="username"
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
                  "
                >
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      width: 100%;
                      align-items: center;
                    "
                  >
                    <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                      Enviar
                    </v-btn>
                  </div>

                  <v-spacer></v-spacer>

                  
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
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
      darkTheme: true,
      platformName: "Platform name",
      password: null,
      username: null,
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
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
  },
};
</script>

<style>
.bosco {
  height: 20%;
  width: 20%;
  position: relative;
  left: 38%;
}
.donante {
  color: red;
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  line-height: normal;
  position: relative;
  transition: inherit;
}

.v-card__actions {
  display: block;
}
.layout {
  display: unset !important;
}
</style>
