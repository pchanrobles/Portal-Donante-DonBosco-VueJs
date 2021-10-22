<template>
  <div>
    <div style="color: #dc001b; text-align: center">
      <h2>HAZ TU DONATIVO</h2>
      <h3>¿Por qué hacer una donación?</h3>
      <h6>LLÁMANOS Y TE INFORMAREMOS 
      957 475 267</h6>
    </div>
    

     <a href="https://donboscosalesianos.social/haz-un-donativo/" target="_blank"
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

          <v-img height="250" src="../assets/manos.png"></v-img>

          <v-card-title>Fundacion Don Bosco</v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              Con tu donación lograremos que más personas accedan al mundo del
              trabajo, que jóvenes inmigrantes o extutelados tengan un hogar
              mientras logran su autonomía, que adolescentes retornen a los
              estudios que abandonaron… Dona a la Fundación Don Bosco Salesianos
              Social y hazte socio/a donante para que podamos conseguirlo.
            </div>
          </v-card-text>
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

          <v-img height="250" src="../assets/pulseras.png"></v-img>

          <v-card-title>Apoya nuestro trabajo</v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              Con tu colaboración podemos conseguir que adolescentes retornen a
              los estudios que abandonaron
            </div>
          </v-card-text>
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

          <v-img height="250" src="../assets/manos2.png"></v-img>

          <v-card-title>Ventajas Fiscales</v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              De los primeros 150€ donados te devolverán un 80% en tu
              declaración de la renta.
            </div>
          </v-card-text>
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
}
.btn {
  background-color: #dc001b;
}
</style>