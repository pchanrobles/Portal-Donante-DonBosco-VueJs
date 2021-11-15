<template>
  <!-- codigo de formulario reset password aqui -->

  <v-app
    :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
    :dark="darkTheme"
    id="inspire"
  >
    <v-container style="margin-top: 50px">
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                  <div>
                    <v-img
                      class="bosco"
                      src="@/assets/bosco.png"
                      alt="imagen Don bosco"
                    ></v-img>
                    <h4 class="donante" style="">PORTAL DONANTE</h4>
                  </div>
                </h3>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-btn style="font-family: MONTSERRAT" color="info" text>
                Restablecer contraseña
              </v-btn>

              <v-form>
                <v-text-field
                  outline
                  label="Email"
                  type="text"
                  v-model="email"
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
                  <v-btn
                    @click="fire()"
                    color="info"
                    :large="$vuetify.breakpoint.smAndUp"
                  >
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
</template>

<script>
export default {
  components: {},
  data() {
    return {
      darkTheme: true,
      platformName: "Platform name",
      dni: null,
      email: null,
    };
  },
  methods: {
    mostrar() {
      console.log(this.dni, this.email);
    },

    fire() {
      this.$fire({
        text: "Se ha enviado un enlace a su correo electronico.",
        type: "success",
      }).then((r) => {
        console.log(r.value);
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
  color: #dc001b;
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