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
                        src="@/assets/bosco.png"
                        alt="imagen Don bosco"
                      ></v-img>
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
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    label="Contraseña"
                    hint="Debe contener al menos 8 carácteres"
                    class="input-group--focused"
                    @click:append="show3 = !show3"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions
                class="justify-content-center"
                :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    width: 100%;
                    align-content: space-between;
                    justify-content: center;
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
                    <v-checkbox label="Recordar contraseña"></v-checkbox>

                    <v-btn
                      @click="show"
                      color="info"
                      :large="$vuetify.breakpoint.smAndUp"
                    >
                      Entrar
                    </v-btn>
                  </div>

                  <v-btn @click="redirectToForgot" color="info" text>
                    ¿Se te olvidó tu contraseña?
                  </v-btn>
                  <v-btn @click="redirectToRegister" color="info" text>
                    Registrarse
                  </v-btn>
                  <div class="d-flex align-item-center justify-content-center">
                    <v-checkbox></v-checkbox>
                    <a
                      href="https://fundaciondonbosco.es/politica-privacidad/"
                      target="_blank"
                      >Política de Privacidad de Datos</a
                    >
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
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#DC001B",
        secondary: "#FFFFFF",
        accent: "#000",
        error: "#b71c1c",
        info: "#DC001B",
        success: "#27A73B",
        warning: "#FFC107",
      },
    },
  },
});
export default {
  data() {
    return {
      password: "",
      dni: "",
      show3: false,
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (v) => v.length >= 8 || "Minimo 8 carácters",
        emailMatch: () => `El email o la contraseña no coinciden`,
      },
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
.v-application--wrap {
  justify-content: center !important;
  background-color: #dadcde;
}
.bosco {
  height: 20%;
  width: 20%;
  position: relative;
  left: 38%;
}
.donante {
  color: #dc001b;
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  line-height: normal;
  position: relative;
  transition: inherit;
}
.v-input--selection-controls {
  margin: 0 !important;
  padding: 0 !important;
}
.v-card__actions {
  display: block;
}
.layout {
  display: unset !important;
}
</style>
