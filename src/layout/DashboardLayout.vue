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
          <v-list-item class="menu-link">
            <v-list-item-icon>
              <i
                class="far fa-user"
                style="font-size: 22px; color: #1537d1"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/' }"
              >Perfil</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link">
            <v-list-item-icon>
              <i
                class="far fa-newspaper"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/news' }"
              >Noticias</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link" v-show="this.$store.state.user.estado">
            <v-list-item-icon>
              <i
                class="fas fa-bullhorn"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>

            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/comunicados' }"
              >Comunicados</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link" v-show="this.$store.state.user.estado">
            <v-list-item-icon>
              <i class="fas fa-hands" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/donaciones' }"
              >Donaciones</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link" v-show="this.$store.state.user.estado">
            <v-list-item-icon>
              <i
                class="fas fa-hand-holding-usd"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'DonacionesPuntuales' }"
              >Dona Ahora</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link" v-show="this.$store.state.user.estado">
            <v-list-item-icon>
              <i class="fas fa-award" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Certificados' }"
              >Certificados</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link" v-show="this.$store.state.user.estado">
            <v-list-item-icon>
              <i class="far fa-bell" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Notificaciones' }"
              >Notificaciones</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link">
            <v-list-item-icon>
              <i
                class="fas fa-question"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Preguntas' }"
              >Preguntas</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link">
            <v-list-item-icon>
              <i
                class="far fa-times-circle"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <v-btn 
              @click="logout"
              style="
                color: white;
                margin-left: -16px;
                border-bottom: 3px solid white;
                background-color: #dc001b;
                font-family: MONTSERRAT;
              "
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
      <v-toolbar-title style="color: white; font-family: MONTSERRAT">
        {{
            this.$store.state.user.donante.name
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
  created(){
      this.$store.dispatch('updateStateUser')
  },
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
.menu-link:hover{
  background-color: rgb(236, 155, 155);

}
/** Fijar el menú principal y secundario en la parte superior en los móviles**/
@media screen and (min-width: 321px) and (max-width: 768px) {
}
</style>
