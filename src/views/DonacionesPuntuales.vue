<template>
  <div>
    <div style="color: #dc001b; text-align: center">
      <h2>OTRAS OPCIONES DE DONACION</h2>

      <h6>LLÁMANOS Y TE INFORMAREMOS 957 475 267</h6>
    </div>

    <a href="https://donboscosalesianos.social/haz-un-donativo/"  target="_blank"
      ><v-card-actions style="display: flex; justify-content: center">
        <v-btn style="background-color: #dc001b; color: white">
          CLICK PARA DONAR
        </v-btn>
      </v-card-actions></a
    >

    <div class="container">
      <div class="cards">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <a href="https://donboscosalesianos.social/bizum/" target="_blank"
            ><v-img height="250" src="../assets/bizumC.png"></v-img>
          </a>

          <v-card-title>Fundacion Don Bosco</v-card-title>
        </v-card>
      </div>

      <div class="cards">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <a href="https://donboscosalesianos.social/haz-un-donativo/" target="_blank"
            ><v-img height="250" src="../assets/telefono.png"></v-img
          ></a>

          <v-card-title>Apoya nuestro trabajo</v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style>
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