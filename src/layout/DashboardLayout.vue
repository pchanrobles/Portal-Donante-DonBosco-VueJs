<template>
  <v-card class="mx-auto overflow-hidden" height="100vh">
    <v-app-bar color="#DC001B " dark>
      <v-app-bar-nav-icon @click="drawer = true"><i class="fas fa-house-user"></i></v-app-bar-nav-icon>

      <v-toolbar-title>NOMBRE USUARIO</v-toolbar-title>
    </v-app-bar>
    <News> </News>
   
       <v-navigation-drawer
      style="background-color: #e8e9ea"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="#DC001B --text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-title> <h2>Donantes DonBosco</h2></v-list-item-title>
          </v-list-item>

          <v-main></v-main>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-house-user"></i>
            </v-list-item-icon>
            <a href="/">INICIO</a>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-bullhorn"></i>
            </v-list-item-icon>
            <a href="Releases">COMUNICADOS</a>
          </v-list-item>

          <v-list-item>
            <i class="far fa-user"></i>
            <a href="Profile">Perfil</a>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon small></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <i class="far fa-times-circle"></i>
              <a href="Login">Cerrar sesion</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item-icon>
            <v-icon small></v-icon>
          </v-list-item-icon>
          <v-list-item-title
            ><i class="far fa-bell"></i>
            Notificaciones</v-list-item-title
          >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
Vue.use(Vuetify);

import Vue from "vue";
import Vuetify from "vuetify/lib";
import News from "../components/News.vue";

export default {
  components: {
    News,
   
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>
