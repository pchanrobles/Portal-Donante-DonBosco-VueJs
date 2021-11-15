<template>
  <div id="app">
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    <div>
                      <h4 class="donante">PORTAL DEL DONANTE</h4>
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
                    label="Documento de Identificación"
                    type="text"
                    v-model="documento"
                  ></v-text-field>

                  <v-text-field
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    label="Contraseña"
                    hint="Debe contener al menos 4 carácteres"
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
                <div class="box">
                  <div class="chekboxBtn align-items-stretch flex-column">
                    <v-btn
                      @click="login()"
                      color="info"
                      :large="$vuetify.breakpoint.smAndUp"
                    >
                      Entrar
                    </v-btn>
                  </div>
                  <div
                    width="100%"
                    class="
                      reconocer
                      red
                      lighten-4
                      rounded
                      d-flex
                      justify-content-center
                    "
                  >
                    <v-dialog v-model="dialog" width="600px">
                      <Privacy-politics />
                    </v-dialog>
                  </div>
                  <v-btn @click="redirectToForgot" color="info" text>
                    ¿Se te olvidó tu contraseña?
                  </v-btn>
                  <v-btn @click="dialog = true" color="info" text>
                    Registrarse
                  </v-btn>
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
import Vue from "vue";
import Vuetify from "vuetify/lib";
import PrivacyPolitics from "@/components/PrivacyPolitics.vue";
import VueSimpleAlert from "vue-simple-alert";
import index from "../store/index.js";
import AuthService from "../services/AuthService.js";

Vue.use(Vuetify, VueSimpleAlert);
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
  components: {
    PrivacyPolitics,
  },
  data() {
    return {
      dialog: false,
      password: "",
      documento: "",
      error: false,
      show3: false,
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (v) => v.length >= 4 || "Minimo 4 carácters",
        emailMatch: () => `El email o la contraseña no coinciden`,
      },
    };
  },
  methods: {
    redirectToRegister() {
      this.$router.push({
        path: "/",
      });
    },
    login() {
      let data = {
        is_admin: "",
        state: "",
        documento: this.documento.toUpperCase(),
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then(() => {
          this.$fire({
            allowOutsideClick: false,
            title: "Inicio de sesión correcto",
            type: "success",
          }).then(() => {
            window.location.reload();
          });
        })
        .catch((err) => {
          this.$fire({
            allowOutsideClick: false,
            title: "Inicio de sesión incorrecto",
            type: "error",
          });
          console.log(err);
        });
    },
    redirectToForgot() {
      this.$router.push({
        path: "/forgot",
      });
    },
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  align-content: space-between;
  justify-content: center;
}
.chekboxBtn {
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.v-messages {
  display: contents;
}
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
