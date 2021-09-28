<template>
  <v-app>
    <v-stepper class="h-100" v-model="e1">
<v-img
  class="text-center mb-5 "
  max-height="10%"
  max-width="100%"
  src="../assets/bosco.png"
></v-img>
      <v-stepper-header class="headerstep">
        <v-stepper-step :complete="e1 > 1" step="1">
          Datos Personales
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Datos Bancarios
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Otros Datos </v-stepper-step>
      </v-stepper-header>

      <!--STEPPER STEPS STARTS-------------------------------------------------------------------------->
      <v-stepper-items class="mainStepper">
        <!-- STEP 1 ------------------------------------------------->
        <v-stepper-content step="1">
          <!-- VFORM VALIDATE START 1------------------------------------------------->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="apellidos"
              :counter="10"
              :rules="nameRules"
              label="Apellidos"
              required
            ></v-text-field>

            <v-text-field
              v-model="dni"
              :counter="10"
              :rules="nameRules"
              label="DNI"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="info"
              class="mr-4"
              id="btnStep1"
              @click="e1 = 2"
            >
              Continuar
            </v-btn>
            <v-btn text> Cancelar </v-btn>
          </v-form>
          <!-- VFORM VALIDATE END 1------------------------------------------------->
        </v-stepper-content>

        <!-- STEP 2 ------------------------------------------------->
        <v-stepper-content step="2">
          <!-- VFORM VALIDATE START 2------------------------------------------------->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn class="mt-3" color="primary" @click="e1 = 3">
              Continuar
            </v-btn>

            <v-btn class="mt-3 ml-3" color="primary" @click="e1 = 1">
              Volver
            </v-btn>

            <v-btn class="mt-3 ml-3" text> Cancelar </v-btn>
          </v-form>
          <!-- VFORM VALIDATE END 2------------------------------------------------->
        </v-stepper-content>

        <!-- STEP 3 ------------------------------------------------->
        <v-stepper-content step="3">
          <!-- VFORM VALIDATE START 3------------------------------------------------->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-btn class="mt-3" color="primary" @click="e1 = 1">
              Continuar
            </v-btn>
            <v-btn class="mt-3 ml-3" color="primary" @click="e1 = 2">
              Volver
            </v-btn>
            <v-btn color="accent" class="mt-3 ml-3" text> Cancelar </v-btn>
          </v-form>
          <!-- VFORM VALIDATE END 3------------------------------------------------->
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
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
  data: () => ({
    e1: 1,
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Debe introducir su nombre",
      (v) =>
        (v && v.length <= 10) ||
        "Su nombre no puede tener más de 10 carácteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Debe de introducir su E-mail",
      (v) => /.+@.+\..+/.test(v) || "Su E-mail debe ser válido",
    ],
  }),
  mounted() {
    console.log(this.valid);
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
.primary {
  background-color: #f8576a !important;
}
.mainStepper{
  margin-top: 5%;
}
.v-image__image--cover {
    background-size: contain;
}
</style>
