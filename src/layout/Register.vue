<template>
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">
          Name of step 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Name of step 3
        </v-stepper-step>
      </v-stepper-header>

            <!--STEPPER STEPS STARTS-------------------------------------------------------------------------->
      <v-stepper-items>

        <!-- STEP 1 ------------------------------------------------->
        <v-stepper-content step="1">
            <!-- VFORM VALIDATE START 1------------------------------------------------->
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

              <v-btn
                :disabled="!valid"
                color="info"
                class="mr-4"
                id="btnStep1"
                @click="e1=2"
              >
                Continuar
              </v-btn>

            </v-form>
            <!-- VFORM VALIDATE END 1------------------------------------------------->

          <v-btn text>
            Cancelar
          </v-btn>
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

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validar
              </v-btn>

            </v-form>
            <!-- VFORM VALIDATE END 2------------------------------------------------->

          <v-btn class="mt-3" color="primary" @click="e1 = 3">
            Continuar
          </v-btn>

            <v-btn class="mt-3 ml-3" color="primary" @click="e1 = 1">
            Volver
          </v-btn>

          <v-btn text>
            Cancelar
          </v-btn>
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


              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validate
              </v-btn>
            </v-form>
            <!-- VFORM VALIDATE END 3------------------------------------------------->

          <v-btn class="mt-3" color="primary" @click="e1 = 1">
            Continuar
          </v-btn>

          <v-btn text>
            Cancelar
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
    data: () => ({
    e1: 1,
      valid: false,
      name: '',
      nameRules: [
         v => !!v || 'Debe introducir su nombre',
        v => (v && v.length <= 10) || 'Su nombre no puede tener más de 10 carácteres',

      ],
      email: '',
      emailRules: [
        v => !!v || 'Debe de introducir su E-mail',
        v => /.+@.+\..+/.test(v) || 'Su E-mail debe ser válido',
      ],
    }),
mounted(){
    console.log(this.valid)
},
    methods: {
      validate () {
          this.$refs.form.validate()
      },
    },
};
</script>

<style></style>
