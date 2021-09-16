<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="100vh"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>NOMBRE USUARIO</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>

            <v-list-item-icon>
              <v-icon small>fas fa-home</v-icon>
              </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>

          </v-list-item>

            <v-main></v-main>

          <v-list-item>

            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Perfil</v-list-item-title>

          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
Vue.use(Vuetify)

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

export default {
      data: () => ({
      drawer: false,
      group: null,
    }),
}

</script>

<style></style>
