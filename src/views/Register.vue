<template>
  <v-app>
    <v-stepper class="h-100" v-model="page">
      <v-img class="picture mb-5 mt-5" src="../assets/bosco.png"></v-img>
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
        <validation-observer v-slot="{ handleSubmit }">
          <v-form @submit.prevent="handleSubmit(onSubmit)">
            <!-- STEP 1 ------------------------------------------------->
            <v-stepper-content step="1">
              <!--  CUOTA --------------------------------->

              <validation-provider
                v-if="page === 1"
                v-slot="{ errors }"
                name="Cuota"
                rules="required"
              >
                <v-select
                  v-model="form.tipoCuota"
                  name="Cuota"
                  :items="aportacion"
                  label="Selecciona tipo de cuota"
                  item-text="name"
                  :error-messages="errors"
                  required
                >
                </v-select>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="La selección"
                rules="required"
                v-if="
                  form.tipoCuota !== null &&
                  form.tipoCuota !== 'Aportación puntual y única'
                "
              >
                <v-radio-group
                  required
                  :error-messages="errors"
                  v-model="form.cuota"
                  row
                >
                  <v-radio
                    label="10€"
                    color="red darken-3"
                    value="10"
                  ></v-radio>
                  <v-radio
                    label="20€"
                    color="red darken-3"
                    value="20"
                  ></v-radio>
                  <v-radio
                    label="30€"
                    color="red darken-3"
                    value="30"
                  ></v-radio>
                  <v-radio
                    label="Otra"
                    color="red darken-3"
                    value="Otra Cuota"
                  ></v-radio>
                </v-radio-group>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="El campo"
                rules="required"
                v-if="
                  form.cuota === 'Otra Cuota' ||
                  form.tipoCuota === 'Aportación puntual y única'
                "
              >
                <v-text-field
                  :error-messages="errors"
                  v-model="form.cuotaManual"
                  label="Indique la cantidad en euros"
                  required
                ></v-text-field>
              </validation-provider>
            </v-stepper-content>
            <!-- STEP 2 ------------------------------------------------->
            <v-stepper-content step="2">
              <!--  NOMBRE --------------------------------->

              <validation-provider
                v-if="page === 2"
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
                v-if="page === 2"
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
                v-if="page === 2"
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
                v-if="page === 2"
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
                v-if="page === 2"
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
                v-if="page === 2"
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

              <!--  DIRECCIÓN --------------------------------->

              <validation-provider
                v-if="page === 2"
                v-slot="{ errors }"
                name="La Dirección"
                rules="required"
              >
                <v-text-field
                  v-model="form.direccion"
                  :error-messages="errors"
                  label="Dirección"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  SELECTOR DE PAIS --------------------------------->

              <validation-provider
                v-if="page === 2"
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

              <!--  Nº DE TELÉFONO MOVIL--------------------------------->

              <validation-provider
                v-if="page === 2"
                v-slot="{ errors }"
                name="El número de teléfono móvil"
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
                  label="Número de teléfono móvil"
                  required
                ></v-text-field>
              </validation-provider>
              <!--  Nº DE TELÉFONO FIJO--------------------------------->

              <validation-provider
                v-if="page === 2"
                v-slot="{ errors }"
                name="El número de teléfono fijo"
                :rules="{
                  required: true,
                  digits: 9,
                  regex: '[0-9]$',
                }"
              >
                <v-text-field
                  v-model="form.phoneNumber2"
                  :counter="9"
                  :error-messages="errors"
                  label="Número de teléfono fijo"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  SELECTOR TIPO DOCUMENTO --------------------------------->

              <validation-provider
                v-if="page === 2"
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
                v-if="form.tipoDocumento !== null"
                v-slot="{ errors }"
                :name="form.tipoDocumento"
                :rules="'required|DocValido:' + form.tipoDocumento"
              >
                <v-text-field
                  v-model="form.documento"
                  :error-messages="errors"
                  :label="'Documento ' + form.tipoDocumento"
                  required
                ></v-text-field>
              </validation-provider>

              <!--  EMAIL --------------------------------->

              <validation-provider
                v-if="page === 2"
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
            </v-stepper-content>
            <!-- STEP 3 ------------------------------------------------->

            <v-stepper-content step="3">
              <validation-provider
                v-if="page === 3"
                v-slot="{ errors }"
                name="Nombre Banco"
                rules="required"
              >
                <v-text-field
                  v-model="form.nameBank"
                  label="Nombre del Banco"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-if="page === 3"
                v-slot="{ errors }"
                name="Contraseña"
                rules="required|min: 5"
              >
                <v-text-field
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show3 ? 'text' : 'password'"
                  @click:append="show3 = !show3"
                  v-model="form.password"
                  label="Contraseña"
                  class="input-group--focused"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-if="page === 3"
                v-slot="{ errors }"
                name="Confirmar Contraseña"
                :rules="'required|min:5|passwordMatch:' + form.password"
              >
                <v-text-field
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show3 ? 'text' : 'password'"
                  @click:append="show3 = !show3"
                  class="input-group--focused"
                  v-model="form.confirm_password"
                  label="Confirmar Contraseña"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-if="page === 3"
                v-slot="{ errors }"
                name="iban"
                rules="required|ibanCheck"
              >
                <v-text-field
                  v-model="form.iban"
                  v-mask="'AA## #### #### #### #### #### #####'"
                  label="Cuenta Bancaria"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>
            </v-stepper-content>

            <v-btn
              class="mt-3 ml-3" style="color: white"
              type="submit"
              :color="page === 3 ? 'success' : '#DC001B'"
            >
              {{ page === 3 ? "Enviar" : "Siguiente" }}
            </v-btn>

            <v-btn class="mt-3 ml-3" style="color: white" color="#DC001B" @click="goBack(page - 1)">
              Volver
            </v-btn>

            <div class="text-center">
              <v-dialog v-model="dialogSuccess" width="50em">
                <v-card>
                  <v-card-title
                    class="text-break text-h4 primary text-center text-white"
                  >
                    Formulario de registro enviado
                  </v-card-title>

                  <v-card-text class="mt-5">
                    <span class="text-h6 text-center text-break"
                      >Su formulario de registro se ha enviado
                      <span class="text-success font-weight-bold"
                        >correctamente.</span
                      >
                      <br /><br />
                      <span class="font-weight-bold text-black"
                        >Recibirá un correo</span
                      >
                      cuando su usuario sea validado.</span
                    >
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="
                        red
                        accent-2
                        w-100
                        text-h6 text-white
                        font-weight-bold
                      "
                      text
                      @click="(dialogSuccess = false), goToProfile()"
                    >
                      ACEPTAR
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>

            <div class="text-center">
              <v-dialog v-model="dialogWrong" width="500">
                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    ATENCIÓN
                  </v-card-title>

                  <v-card-text class="font-weight-bold">
                    No se ha podido enviar su formulario debido a un error. <br><br>
                    <span class="font-weight-bold"> {{ errors }} </span>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="danger" text @click="dialogWrong = false, goToLogin() ">
                      ACEPTAR
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-form>
        </validation-observer>
        <div v-if="loading" class="spinner">
          <v-progress-circular
            :size="90"
            class="postition-fixed"
            :width="9"
            color="red"
            indeterminate
          ></v-progress-circular>
          <p>Enviando información, espere...</p>
        </div>
      </v-stepper-items>
    </v-stepper>
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
  </v-app>
</template>

<script>
Vue.use(Vuetify, VueMask);
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import VueMask from "v-mask";
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import validation from "../helpers/validation.js";
setInteractionMode("eager");

export default {
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    loading: false,
    errors: null,
    page: 1,
    show3: false,
    dialogSuccess: false,
    dialogWrong: false,
    otraCuota: false,
    errors: null,
    form: {
      direccion: "",
      provincia: "",
      poblacion: "",
      cp: "",
      cuotaManual: "",
      tipoDocumento: null,
      documento: "",
      cuota: null,
      tipoCuota: null,
      name: "",
      lastName: "",
      selectorPais: "",
      phoneNumber: "",
      phoneNumber2: "",
      email: "",
      nameBank: "",
      iban: null,
      confirm_password: "",
      password: "",
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
    goToLogin() {
      this.$router.push("/login");
    },
    goToProfile() {
      this.$router.push("/");
    },
    onSubmit() {
      if (this.page === 3) {
        //Llamada a API
        console.log(this.form);
        (this.loading = true),
          this.$store
            .dispatch("register", this.form)
            .then(() => {
              (this.loading = false), (this.dialogSuccess = true);
              })
            .catch((err) => {
              (this.loading = false), (this.dialogWrong = true);
              this.errors = err;
              console.log(err.response.data.errors.documento[0])
              if (err.response.data.errors.documento[0] === 'The documento has already been taken.') {
                this.errors = 'Usuario ya registrado'
              }
            });
      }
      this.page++;
    },
    goBack(step) {
      console.log(step);
      if (step < 1) {
        return;
      }
      this.page = step;
    },
  },
};
</script>

<style>

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
}
.picture {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 9%;
}

.mainStepper {
  margin-top: 5%;
}
.v-image__image--cover {
  background-size: contain;
}
</style>
