<template>
  <v-card class="mx-auto overflow-hidden" height="100vh">
    <v-app-bar color="#DC001B " dark>
      <v-app-bar-nav-icon @click="drawer = true">
        <i class="fas fa-house-user"  style="font-size:50px; color:white"></i>
        </v-app-bar-nav-icon>

      <v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOMBRE USUARIO</v-toolbar-title>
    </v-app-bar>
    <News> </News>
    <Footer> </Footer>

    <v-navigation-drawer
      style="background-color: #8B0000"
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
            <v-list-item-title> <h3 style="color: white;" >DONANTES DONBOSCO</h3></v-list-item-title>
          </v-list-item>

          <v-main></v-main>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-house-user" style="font-size:22px;color:gray"></i>
            </v-list-item-icon>
            <a href="/"style="color: white;" >&nbsp;INICIO</a>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-bullhorn" style="font-size:22px; color:#FFE900"></i>
            </v-list-item-icon>
            <a href="Releases" style="color: white;">&nbsp;COMUNICADOS</a>
          </v-list-item>

          <v-list-item>
            <i class="far fa-user"  style="font-size:19px; color:cyan"></i>
            <a href="Profile" style="color: white;">&nbsp;PERFIL</a>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon small></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <i class="far fa-times-circle" style="font-size:20px;color:grey"></i>
              <a href="Login" style="color: white;">&nbsp;CERRAR SESION</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item-icon>
            <v-icon small></v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <i class="far fa-bell"  style="font-size:22px; color:orange"></i> 
            <a href="Login" style="color: white;">&nbsp;NOTIFICACIONES</a>
            </v-list-item-title
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
import Footer from "../components/Footer.vue";

export default {
  components: {
    News,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>
