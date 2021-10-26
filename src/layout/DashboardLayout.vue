<template>
  <v-app>
    <v-navigation-drawer
      style=" display: flex; position:fixed; background-color: #8b0000"
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
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-title>
              <h3 style="color: white; font-family: MONTSERRAT">
                DON BOSCO
              </h3></v-list-item-title
            >
          </v-list-item>

          <v-main></v-main>
          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-house-user"
                style="font-size: 25px; color:white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/' }"
              >Perfil</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-newspaper"
                style="font-size: 22px; color: cyan"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/news' }"
              >Noticias</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-bullhorn"
                style="font-size: 22px; color: #ffe900"
              ></i>
            </v-list-item-icon>

            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/comunicados' }"
              >Comunicados</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-hands"
                style="font-size: 22px; color: #fdddca"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/donaciones' }"
              >Donaciones</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-hand-holding-usd"
                style="font-size: 22px; color: green"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'DonacionesPuntuales' }"
              >Dona Ahora</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-award"
                style="font-size: 22px; color: #bf930d"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Certificados' }"
              >Certificados</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i class="far fa-bell" style="font-size: 22px; color: orange"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Notificaciones' }"
              >Notificaciones</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="fas fa-question"
                style="font-size: 22px; color: blue"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Preguntas' }"
              >Preguntas</router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i
                class="far fa-times-circle"
                style="font-size: 22px; color: grey"
              ></i>
            </v-list-item-icon>
            <v-btn
              @click="logout"
              style="color: red; font-family: MONTSERRAT"
              >Cerrar Sesion</v-btn
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
      <v-toolbar-title style="font-family: MONTSERRAT; text-h3 color: white">
        {{
          this.$store.state.user == null
            ? "Don Bosco"
            : this.$store.state.user.donante.name
        }}
      </v-toolbar-title>
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
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
