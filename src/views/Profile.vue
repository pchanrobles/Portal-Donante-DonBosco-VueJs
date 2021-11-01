<template>

  <v-card max-width="375" class="mx-auto">
       
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon> </v-btn>

          <v-spacer></v-spacer>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="text-h4 pl-12 pt-12">
            <v-card-text>
              <h5>
                Hola, <br />
                {{ this.$store.state.user.donante.name }}
              </h5>
            </v-card-text>
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.phoneNumber
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <!-- telefono -->

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.name
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Nombre</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.lastName
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Apellido</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <!-- DNI -->
        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.tipoDocumento
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Tipo documento</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.documento
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>documento</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <!-- DNI -->
        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.direccion
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Direción</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.cp
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>CP</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.email
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Email</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.tipoCuota
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>Tipo de cuota</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle
            >{{ this.$store.state.user.donante.cuota }}€</v-list-item-subtitle
          >
          <v-list-item-subtitle>Cuota</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.selectorPais
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.provincia
          }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.poblacion
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
