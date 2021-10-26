<template>
        
          <v-container  align="center" justify="center" fill-height>
             <v-row class="bg-img" justify="space-around">
              <v-col cols="12" class="mt-8">
                <v-card width="1200;">
                  <v-layout justify-center>
    <v-toolbar color="#DC001B ">
      <v-toolbar-title style="color: white; "><v-card-text>Hola, <br> Nombre de Usuario</v-card-text>
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
                        <v-list-item-subtitle
                          >Nombre de Usuario</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item style="margin-left: 87px">
                      <v-list-item-content>
                        <v-list-item-title>Apellido</v-list-item-title>
                        <v-list-item-subtitle>Apellidos</v-list-item-subtitle>
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
                        <v-list-item-title>DNI</v-list-item-title>
                        <v-list-item-subtitle>DNI/NIE/CIF</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-map-marked-alt"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>España</v-list-item-title>
                        <v-list-item-subtitle>Pais</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-map-marker-alt"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>Andalucia</v-list-item-title>
                        <v-list-item-subtitle>Provincia</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-restroom"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>Poblacion</v-list-item-title>
                        <v-list-item-subtitle>Poblacion</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-map-pin"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>CP</v-list-item-title>
                        <v-list-item-subtitle
                          >Codigo Postal</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-hand-holding-heart"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>Cuota</v-list-item-title>
                        <v-list-item-subtitle>Cuota</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <i
                          class="fas fa-hand-holding-medical"
                          style="font-size: 22px; color: #1537d1"
                        ></i>
                      </v-list-item-icon>

                      <v-list-item-content style="margin-left: 30px">
                        <v-list-item-title>Tipo de Cuota</v-list-item-title>
                        <v-list-item-subtitle
                          >Tipo de Cuota</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list two-line>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-list-item-icon>
                            <i
                              class="fas fa-mobile-alt"
                              style="font-size: 22px; color: #1537d1"
                            ></i>
                          </v-list-item-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>1 444 555 8888</v-list-item-title>
                          <v-list-item-subtitle>Movil</v-list-item-subtitle>
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
                          <v-list-item-title
                            >pepe_el_toro@donbosco.com</v-list-item-title
                          >
                          <v-list-item-subtitle>EMAIL</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                     
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
       
    </div>
   
  </div>
</template>
<script>
export default {
  components: {},
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