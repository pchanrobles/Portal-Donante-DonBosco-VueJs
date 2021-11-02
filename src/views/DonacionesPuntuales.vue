<template>
  <div>
    <div style="color: #dc001b; text-align: center; margin-top: 50px">
      <h2>OTRAS OPCIONES DE DONACION</h2>

      <h6>LLÁMANOS Y TE INFORMAREMOS 957 475 267</h6>
    </div>

    <a href="https://donboscosalesianos.social/haz-un-donativo/" target="_blank"
      ><v-card-actions style="display: flex; justify-content: center; margin-top: 30px;">
        <v-btn
          style="background-color: #dc001b; color: white; margin-bottom: 3em"
        >
          CLICK PARA DONAR
        </v-btn>
      </v-card-actions></a
    >
    <!-- cards -->
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card>
            <a href="https://donboscosalesianos.social/bizum/" target="_blank"
              ><v-img
                width="300"
                height="200"
                src="../assets/bizumC.png"
              ></v-img>
            </a>

            <v-title class="title">
              <h4 style="text-align: center">Fundacion Don Bosco</h4>
            </v-title>

            <v-card-text> </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6>
          <v-card>
            <a
              href="https://donboscosalesianos.social/haz-un-donativo/"
              target="_blank"
              ><v-img
                width="300"
                height="200"
                src="../assets/telefono.png"
              ></v-img
            ></a>

            <v-title class="title">
              <h4 style="text-align: center">Apoya nuestro trabajo</h4></v-title
            >

            <v-card-text> </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- cards -->
  </div>
</template>

<style>
.title {
  color: #dc001b;
}
.container {
  display: flex;
  justify-content: center;
}

.cards {
  margin-left: 30px;
  width: 600px;
}
.btn {
  background-color: #dc001b;
}
</style>