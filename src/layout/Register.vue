<template>
  <v-app>
    <v-stepper class="h-100" v-model="page">
      <v-img
        class="mb-5 mt-5 "
        max-height="10%"
        max-width="100%"
        src="../assets/bosco.png"
      ></v-img>
      <v-stepper-header class="headerstep">
        <v-stepper-step :complete="page > 1" step="1">
          Datos Personales
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="page > 2" step="2">
          Dirección
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Datos sobre donación </v-stepper-step>
      </v-stepper-header>

      <!--STEPPER STEPS STARTS-------------------------------------------------------------------------->
      <v-stepper-items class="mainStepper">
        <!-- STEP 1 ------------------------------------------------->
        <v-stepper-content step="1">
          <!-- VFORM VALIDATE START 1------------------------------------------------->
          <validation-observer ref="observer" v-slot="{ invalid }">
            <v-form @submit.prevent="show" ref="form">
              <!--  NOMBRE --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="nombre"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :error-messages="errors"
                  label="Nombre"
                  required
                ></v-text-field>

                <!--  APELLIDO --------------------------------->
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="apellido"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="lastName"
                  :counter="30"
                  :error-messages="errors"
                  label="Apellido"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  SELECTOR DE PAIS (NºTEL) --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="País"
                rules="required"
              >
                <v-select
                  v-model="selectorPais"
                  name="selectorPais"
                  :items="countries"
                  label="País"
                  item-text="name"
                  data-vv-name="select"
                  :error-messages="errors"
                  required
                >
                  <template v-slot:item="slotProps">
                    <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
                    {{ slotProps.item.name }}
                  </template>
                </v-select>
              </validation-provider>

              <!--  Nº DE TELÉFONO --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="El número de teléfono"
                :rules="{
                  required: true,
                  digits: 9,
                  regex: '[0-9]$',
                }"
              >
                <v-text-field
                  v-model="phoneNumber"
                  :counter="9"
                  :error-messages="errors"
                  label="Número de teléfono"
                  required
                ></v-text-field>
              </validation-provider>
              <!--  EMAIL --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn class="mr-4" @click="page = 2" :disabled="invalid">
                Continuar
              </v-btn>

              <v-btn @click="clear">
                Limpiar formulario
              </v-btn>
            </v-form>
          </validation-observer>
          <!-- VFORM VALIDATE END 1------------------------------------------------->
        </v-stepper-content>

        <!-- STEP 2 ------------------------------------------------->
        <v-stepper-content step="2">
          <!-- VFORM VALIDATE START 2------------------------------------------------->
          <v-form @submit.prevent="show" ref="form">
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn class="mt-3" color="primary" @click="page = 3">
              Continuar
            </v-btn>

            <v-btn class="mt-3 ml-3" color="primary" @click="page = 1">
              Volver
            </v-btn>

            <v-btn class="mt-3 ml-3" text> Cancelar </v-btn>
          </v-form>
          <!-- VFORM VALIDATE END 2------------------------------------------------->
        </v-stepper-content>

        <!-- STEP 3 ------------------------------------------------->
        <v-stepper-content  step="3">
          <!-- VFORM VALIDATE START 3------------------------------------------------->
          <v-form @submit.prevent="show" ref="form">
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-btn class="mt-3" color="primary" type="submit">
              Enviar
            </v-btn>
            <v-btn class="mt-3 ml-3" color="primary" @click="page = 2">
              Volver
            </v-btn>
            <v-btn color="accent" class="mt-3 ml-3" text> Cancelar </v-btn>
          </v-form>
          <!-- VFORM VALIDATE END 3------------------------------------------------->
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
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
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message:
    "{_field_} tiene que ser de {length} dígitos. Y sólo puede contener números ({_value_})",
});

extend("required", {
  ...required,
  message: "El {_field_} no puede estar vacío",
});

extend("max", {
  ...max,
  message: "El {_field_} no debe ser superior a {length} carácteres",
});

extend("regex", {
  ...regex,
  message: "{_value_} no es un número de teléfono válido",
});

extend("email", {
  ...email,
  message: "El Email debe ser válido",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    page: 1,
    select: null,
    countries: [
      {
        name: "España",
        flag: "em-flag-es",
      },
      {
        name: "Estados Unidos",
        flag: "em-flag-us",
      },
      {
        name: "Italia",
        flag: "em-flag-it",
      },
      {
        name: "Francia",
        flag: "em-flag-fr",
      },
      {
        name: "Alemania",
        flag: "em-flag-de",
      },
      {
        name: "Colombia",
        flag: "em-flag-co",
      },
      {
        name: "El Salvador",
        flag: "em-flag-sv",
      },
      {
        name: "Ecuador",
        flag: "em-flag-ec",
      },
      {
        name: "Argentina",
        flag: "em-flag-ar",
      },
    ],
    checkbox: null,
    name: "",
    lastName: "",
    selectorPais: "",
    phoneNumber: "",
    email: "",
  }),
  methods: {
    show(submitEvent) {
      for (let i = 0; i < this.$refs.form.$children.length; i++) {
        console.log(this.$refs.form.$children[i].value);
      }
      for (let i = 0; i < submitEvent.target.elements.length; i++) {
      console.log(submitEvent.target.elements[i]._value);
      }
      console.log(this.$refs.form.$children.length);
      console.log(submitEvent);

      console.log(this.$refs.form);
    },
    clear() {
      this.name = "";
      this.lastName = "";
      this.phoneNumber = "";
      this.email = "";
      this.selectorPais = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
.primary {
  background-color: #f8576a !important;
}
.mainStepper {
  margin-top: 5%;
}
.v-image__image--cover {
  background-size: contain;
}
</style>
