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
        <v-form @submit.prevent="show">
          <validation-observer v-slot="{ invalid }">
            <v-stepper-content step="1">
              <!--  SELECTOR DE PAIS (NºTEL) --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="Cuota"
                rules="required"
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
                  required
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
                  required
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
                  required
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
                  required
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
                  v-model="form.otraCantidad"
                  label="Indique la cantidad en euros"
                  required
                ></v-text-field>

                <v-text-field
                  v-if="form.cuota === 'Aportación puntual y única'"
                  v-model="form.otraMensual"
                  :counter="10"
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

          <!-- STEP 1 ------------------------------------------------->
          <v-stepper-content step="2">
            <!-- VFORM VALIDATE START 1------------------------------------------------->
            <validation-observer v-slot="{ invalid }">
              <!--  NOMBRE --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="nombre"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="form.name"
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
                  v-model="form.lastName"
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

              <!--  DNI --------------------------------->
              <validation-provider
                v-slot="{ errors }"
                name="DNI"
                rules="DNI1|NIE1"
              >
                <v-text-field
                  v-model="form.dni"
                  :error-messages="errors"
                  label="DNI"
                  :counter="9"
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

              <v-btn color="primary" @click="clear">
                Limpiar formulario
              </v-btn>
            </validation-observer>
            <!-- VFORM VALIDATE END 1------------------------------------------------->
          </v-stepper-content>

          <!-- STEP 3 ------------------------------------------------->
          <v-stepper-content step="3">
            <!-- VFORM VALIDATE START 3------------------------------------------------->

            <v-text-field
              v-model="form.bankAccount"
              :counter="10"
              label="Cuenta Bancaria"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.nameBank"
              label="Nombre del Banco"
              required
            ></v-text-field>

            <v-btn class="mt-3" color="success" type="submit">
              Enviar
            </v-btn>

            <v-btn class="mt-3 ml-3" color="primary" @click="page = 2">
              Volver
            </v-btn>

            <v-btn color="accent" class="mt-3 ml-3" text> Cancelar </v-btn>
            <!-- VFORM VALIDATE END 3------------------------------------------------->
          </v-stepper-content>
        </v-form>
      </v-stepper-items>
    </v-stepper>
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
  </v-app>
</template>

<script>
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
import Vue from "vue";
import Vuetify from "vuetify/lib";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

function DNI(value) {
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  var dni1 = value.toString().toUpperCase();

  if (!nifRexp.test(dni1) && !nieRexp.test(dni1)) {
    return false;
  } else {
    return true;
  }
}

extend("DNI1", (dni) => {
  return DNI(dni);
});

function NIE(value) {
  var validChars = "TRWAGMYFPDXBNJZSQVHLCKET";
  var dni1 = value.toString().toUpperCase();
  var nie = dni1
    .replace(/^[X]/, "0")
    .replace(/^[Y]/, "1")
    .replace(/^[Z]/, "2");

  var letter = dni1.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) {
    return true;
  } else {
    return false, "Debe ser un Nif o Nie válido";
  }
}

extend("NIE1", (dni) => {
  return NIE(dni);
});

setInteractionMode("eager");

extend ('iban', {
    validate: (str) => {
        return IBAN.isValid (str);
    },
    message: 'This is not a valid IBAN'
});

extend("digits", {
  ...digits,
  message: "{_field_} tiene que ser de {length} dígitos ({_value_})",
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
  message: "{_value_} no es válido",
});

extend("email", {
  ...email,
  message: "El Email debe ser válido",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    IbanInput: () => import('@/components/IbanInput.vue')
  },

  data: () => ({
    page: 1,
    form: {
      dni: null,
      otraCantidad: "",
      radio: "",
      cuota: null,
      name: "",
      lastName: "",
      selectorPais: "",
      phoneNumber: "",
      email: "",
      address: "",
      postalCode: "",
      nameBank: "",
      bankAccount: "",
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
    checkbox: null,
  }),
  methods: {
    show() {
      console.log(this.form);
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
