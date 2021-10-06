<template>
  <v-app>
    <v-stepper class="h-100" v-model="page">
      <v-img class=" picture mb-5 mt-5 " src="../assets/bosco.png"></v-img>
      <v-stepper-header class="headerstep">
        <v-stepper-step :complete="page > 1" step="1">
          Datos sobre donación
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="page > 2" step="2">
          Datos personales
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Dirección </v-stepper-step>
      </v-stepper-header>

      <!--STEPPER STEPS STARTS-------------------------------------------------------------------------->
      <v-stepper-items class="mainStepper">
        <v-form @submit.prevent="">
          <!-- STEP 1 ------------------------------------------------->
          <validation-observer v-slot="{ invalid }">
            <v-stepper-content step="1">
              <!--  SELECTOR DE PAIS (NºTEL) --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="Cuota"
                rules="required|radioInput"
              >
                <v-select
                  v-model="form.cuota"
                  name="Cuota"
                  :items="aportacion"
                  label="Selecciona tipo de cuota"
                  item-text="name"
                  :error-messages="errors"
                  required
                >
                </v-select>

                <v-radio-group
                  :error-messages="errors"
                  v-model="form.radio"
                  v-if="form.cuota === 'Mensual'"
                  row
                >
                  <v-radio
                    label="10€"
                    color="red darken-3"
                    value="10€"
                  ></v-radio>
                  <v-radio
                    label="20€"
                    color="red darken-3"
                    value="20€"
                  ></v-radio>
                  <v-radio
                    label="30€"
                    color="red darken-3"
                    value="30€"
                  ></v-radio>
                  <v-radio
                    label="Otra"
                    color="red darken-3"
                    value="Otra"
                  ></v-radio>
                </v-radio-group>

                <v-radio-group
                  :error-messages="errors"
                  v-model="form.radio"
                  v-if="form.cuota === 'Trimestral'"
                  row
                >
                  <v-radio
                    label="20€"
                    color="red darken-3"
                    value="20€"
                  ></v-radio>
                  <v-radio
                    label="30€"
                    color="red darken-3"
                    value="30€"
                  ></v-radio>
                  <v-radio
                    label="40€"
                    color="red darken-3"
                    value="40€"
                  ></v-radio>
                  <v-radio
                    label="Otra"
                    color="red darken-3"
                    value="Otra"
                  ></v-radio>
                </v-radio-group>

                <v-radio-group
                  :error-messages="errors"
                  v-model="form.radio"
                  v-if="form.cuota === 'Semestral'"
                  row
                >
                  <v-radio
                    label="30€"
                    color="red darken-3"
                    value="30€"
                  ></v-radio>
                  <v-radio
                    label="40€"
                    color="red darken-3"
                    value="40€"
                  ></v-radio>
                  <v-radio
                    label="50€"
                    color="red darken-3"
                    value="50€"
                  ></v-radio>
                  <v-radio
                    label="Otra"
                    color="red darken-3"
                    value="Otra"
                  ></v-radio>
                </v-radio-group>

                <v-radio-group
                  :error-messages="errors"
                  v-model="form.radio"
                  v-if="form.cuota === 'Anual'"
                  row
                >
                  <v-radio
                    label="30€"
                    color="red darken-3"
                    value="30€"
                  ></v-radio>
                  <v-radio
                    label="40€"
                    color="red darken-3"
                    value="40€"
                  ></v-radio>
                  <v-radio
                    label="50€"
                    color="red darken-3"
                    value="50€"
                  ></v-radio>
                  <v-radio
                    label="Otra"
                    color="red darken-3"
                    value="Otra"
                  ></v-radio>
                </v-radio-group>

                <v-text-field
                  v-if="
                    form.radio === 'Otra' &&
                      form.cuota !== 'Aportación puntual y única'
                  "
                  :error-messages="errors"
                  v-model="form.otraCantidad"
                  label="Indique la cantidad en euros"
                  required
                ></v-text-field>

                <v-text-field
                  v-if="form.cuota === 'Aportación puntual y única'"
                  :error-messages="errors"
                  v-model="form.otraMensual"
                  label="Indique la cantidad en euros"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn
                :disabled="invalid"
                class="mr-4"
                color="primary"
                @click="page = 2"
              >
                Continuar
              </v-btn>

              <v-btn class="mt-3 ml-3" text> Cancelar </v-btn>
            </v-stepper-content>
          </validation-observer>

          <!-- STEP 2 ------------------------------------------------->
          <validation-observer v-slot="{ invalid }">
            <v-stepper-content step="2">
              <!--  NOMBRE --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="nombre"
                rules="required"
              >
                <v-text-field
                  v-model="form.name"
                  :error-messages="errors"
                  label="Nombre"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  APELLIDO --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="apellido"
                rules="required"
              >
                <v-text-field
                  v-model="form.lastName"
                  :error-messages="errors"
                  label="Apellido"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  DIRECCIÓN --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="La Dirección"
                rules="required"
              >
                <v-text-field
                  v-model="form.adress"
                  :error-messages="errors"
                  label="Dirección"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  CÓDIGO POSTAL --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="El código postal"
                :rules="{
                  required: true,
                  digits: 5,
                  regex: '[0-9]$',
                }"
              >
                <v-text-field
                  v-model="form.cp"
                  :counter="5"
                  :error-messages="errors"
                  label="Código Postal"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  PROVINCIA --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="La Provincia"
                rules="required"
              >
                <v-text-field
                  v-model="form.provincia"
                  :error-messages="errors"
                  label="Provincia"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  POBLACIÓN --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="La Población"
                rules="required"
              >
                <v-text-field
                  v-model="form.poblacion"
                  :error-messages="errors"
                  label="Población"
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
                  v-model="form.selectorPais"
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
                  v-model="form.phoneNumber"
                  :counter="9"
                  :error-messages="errors"
                  label="Número de teléfono"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  SELECTOR DE PERSONA O EMPRESA --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="Empresa o Persona"
                rules="required"
              >
                <v-select
                  v-model="form.tipoDocumento"
                  name="selectorFiscal"
                  :items="selectorPE"
                  v-on:change="form.documento = ''"
                  label="Selecione DNI - NIE - CIF"
                  item-text="name"
                  :error-messages="errors"
                  required
                >
                  <template v-slot:item="slotProps">
                    {{ slotProps.item.name }}
                  </template>
                </v-select>
              </validation-provider>

              <!--  Documento --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                :name="form.tipoDocumento"
                :rules="'required|DocValido:'+form.tipoDocumento"
              >
                <v-text-field
                v-if="form.tipoDocumento !== null"
                  v-model="form.documento"
                  :error-messages="errors"
                  :label="'Documento ' + form.tipoDocumento"
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
                  v-model="form.email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn
                class="mr-4"
                color="primary"
                @click="page = 3"
                :disabled="invalid"
              >
                Continuar
              </v-btn>

              <v-btn color="primary" class="ml-3 mr-3" @click="page = 1">
                Volver
              </v-btn>

              <v-btn color="primary">
                Limpiar formulario
              </v-btn>
            </v-stepper-content>
          </validation-observer>

          <!-- STEP 3 ------------------------------------------------->
          <validation-observer v-slot="{ invalid }">
            <v-stepper-content step="3">

              <validation-provider
                v-slot="{ errors }"
                name="nameBank"
                rules="required"
              >
                <v-text-field
                  v-model="form.nameBank"
                  label="Nombre del Banco"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="iban"
                rules="required|ibanCheck"
              >
                <v-text-field
                  v-model="form.iban"
                  v-mask="'AA## #### #### #### #### ####'"
                  label="Cuenta Bancaria"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>

              <v-btn
                class="mt-3"
                color="success"
                type="submit"
                :disabled="invalid"
              >
                Enviar
              </v-btn>

              <v-btn class="mt-3 ml-3" color="primary" @click="page = 2">
                Volver
              </v-btn>

              <v-btn color="accent" class="mt-3 ml-3" text> Cancelar </v-btn>
            </v-stepper-content>
          </validation-observer>
          <!-- VFORM VALIDATE END 3------------------------------------------------->
        </v-form>
      </v-stepper-items>
    </v-stepper>
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
  </v-app>
</template>

<script>
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
Vue.use(Vuetify, VueMask);
import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueMask from 'v-mask'
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import validation from "../helpers/validation.js";
setInteractionMode("eager");

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    page: 1,
    form: {
      provincia: "",
      poblacion: "",
      cp: "",
      adress: "",
      tipoDocumento: null,
      Documento: null,
      otraCantidad: "",
      radio: null,
      cuota: null,
      name: "",
      lastName: "",
      selectorPais: "",
      phoneNumber: "",
      email: "",
      nameBank: "",
      iban: null,
    },
    selectPais: null,
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
    selectCuota: null,
    aportacion: [
      {
        id: 0,
        name: "Mensual",
      },
      {
        id: 1,
        name: "Trimestral",
      },
      {
        id: 2,
        name: "Semestral",
      },
      {
        id: 3,
        name: "Anual",
      },
      {
        id: 4,
        name: "Aportación puntual y única",
      },
    ],
    selectPE: null,
    selectorPE: [
      {
        id: 0,
        name: "CIF",
      },
      {
        id: 1,
        name: "DNI",
      },
      {
        id: 2,
        name: "NIE",
      },
    ],
    checkbox: null,
  }),
  methods: {
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
.picture {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 9%;
}
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
