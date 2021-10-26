<template>
  <v-container align="center" justify="center" fill-height>
    <v-row class="bg-img" justify="space-around">
      <v-col cols="12" class="mt-8">
        <v-card width="1200;">
          <v-layout justify-center>
            <v-toolbar color="#DC001B ">
              <v-toolbar-title style=" font-weight-bold text-h4 color: white; "
                ><v-card-text>
                  Hola, <br />
                  {{ this.$store.state.user.donante.name }}</v-card-text
                >
              </v-toolbar-title>
            </v-toolbar>
          </v-layout>
          <v-spacer></v-spacer>

          <v-card-text>
            <v-list-item>
              <v-list-item-icon>
                <v-list-item-icon>
                  <i
                    class="far fa-user"
                    style="font-size: 22px; color: #1537d1"
                  ></i>
                </v-list-item-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Nombre</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.name
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content style="margin-left: 30px">
                <v-list-item-title>Apellidos</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.lastName
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <i
                  class="fas fa-id-card"
                  style="font-size: 22px; color: #1537d1"
                ></i>
              </v-list-item-icon>

              <v-list-item-content style="margin-left: 30px">
                <v-list-item-title>Documento</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.tipoDocumento
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content style="margin-left: 30px">
                <v-list-item-title>Número</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.documento
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>

            <v-list-item>
              <i
                class="fas fa-map-marked-alt"
                style="margin-right: 2em; font-size: 22px; color: #1537d1"
              ></i>

              <v-list-item-content style="margin-left: 20px">
                <v-list-item-title>Pais</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.selectorPais
                }}</v-list-item-subtitle>

                <v-list-item-title class="mt-3">Dirección</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.direccion
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content style="margin-left: 30px">
                <v-list-item-title>Provincia</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.provincia
                }}</v-list-item-subtitle>

                <v-list-item-title class="mt-3">Poblacion</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.poblacion
                }}</v-list-item-subtitle>

                <v-list-item-title class="mt-3"
                  >Código Postal</v-list-item-title
                >
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.cp
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <i
                class="fas fa-hand-holding-heart"
                style="font-size: 22px; color: #1537d1"
              ></i>

              <v-list-item-content style="margin-left: 60px">
                <v-list-item-title>Tipo de Cuota</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.tipoCuota
                }}</v-list-item-subtitle>
                <v-list-item-title class="mt-3">Cuota</v-list-item-title>
                <v-list-item-subtitle
                  >{{
                    this.$store.state.user.donante.cuota
                  }}€</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-content style="margin-left: 30px">
                <v-list-item-title>Nombre del banco</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.nameBank
                }}</v-list-item-subtitle>
                <v-list-item-title class="mt-3">IBAN</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.donante.iban
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <i
                    class="fas fa-mobile-alt"
                    style="font-size: 22px; color: #1537d1"
                  ></i>
                </v-list-item-icon>

                <v-list-item-content style="margin-left: 30px">
                  <v-list-item-title>Movil</v-list-item-title>
                  <v-list-item-subtitle>{{
                    this.$store.state.user.donante.phoneNumber
                  }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content style="margin-left: 30px">
                  <v-list-item-title>Teléfono fijo</v-list-item-title>
                  <v-list-item-subtitle>{{
                    this.$store.state.user.donante.phoneNumber2
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <i
                    class="fas fa-mail-bulk"
                    style="font-size: 22px; color: #1537d1"
                  ></i>
                </v-list-item-icon>
                <v-list-item-content style="margin-left: 30px">
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>{{
                    this.$store.state.user.email
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-content style="justify-content: center;">
                  <v-list-item-title style="font-weight: 500; text-align: center;"
                    >¿Desea hacer una donacion puntual y
                    única?</v-list-item-title
                  >
                  <v-btn :to="{ path: 'DonacionesPuntuales' }" style=" max-width: 10em; color: white; background-color: red;">DONAR</v-btn>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Profile",
};
</script>

<style>
#icon {
  margin-left: 5%;
}
.h2 {
  display: flex;
  margin-bottom: 5px;
  margin-top: 20px;
}
</style>
