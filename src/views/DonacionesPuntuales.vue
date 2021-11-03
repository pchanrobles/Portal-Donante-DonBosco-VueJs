<template>
  <div class="donar">
    <div style="color: #dc001b; text-align: center">
      <h2>DONAR AHORA</h2>

      <h6>INFORMACIÓN 957 475 267</h6>
    </div>

    <a href="https://donboscosalesianos.social/haz-un-donativo/" target="_blank"
      ><v-card-actions style="display: flex; justify-content: center">
        <v-btn style="background-color: #dc001b; color: white">
          DONAR AQUÍ
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
          <br />
          <a
            class="bizum"
            href="https://donboscosalesianos.social/bizum/"
            target="_blank"
            ><v-img src="../assets/bizumC.png"></v-img>
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

         

         
        </v-card>
      </div>
    </div>
  </div>
</template>

<style>
.donar {
 display: flex;
    margin-top: 10%;
    align-items: center;
    justify-content: flex-end;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
}
.bizum {
  width: 40%;
  display: flex;
  align-items: center;
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
