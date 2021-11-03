<template>
  <v-app>
    <v-navigation-drawer
      style="display: flex; position: fixed; background-color: #dc001b"
      height="100%"
      v-model="drawer"
      absolute
      temporary
      app
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="#DC001B --text text--accent-4"
        >
          <v-list-item>
            <img
              style="display: block; margin: auto"
              src="../assets/imagotipo_vertical_fondos policromáticos_RGB.png"
              width="50%"
            />
          </v-list-item>

          <v-main></v-main>
          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-house-user"
                style="font-size: 22px; color:white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/admin' }"
              >Buscar Donantes</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-bullhorn"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ name: 'ComunicadosAdmin' }"
              >Comunicados</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="far fa-file-alt"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ name: 'Peticion' }"
              >Peticiones</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="far fa-times-circle"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <a href="Login" style="color: white; font-family: MONTSERRAT"
              >&nbsp;Cerrar Sesion</a
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#DC001B" app>
      <v-app-bar-nav-icon @click="drawer = true">
        <i
          class="fas fa-align-justify"
          style="font-size: 30px; color: white"
        ></i>
      </v-app-bar-nav-icon>

      <v-toolbar-title style="font-family: MONTSERRAT; color: white"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👨‍⚖️Administrador</v-toolbar-title
      >
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
Vue.use(Vuetify);

import Vue from "vue";
import Vuetify from "vuetify/lib";

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>
