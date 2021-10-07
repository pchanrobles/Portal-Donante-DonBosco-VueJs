<template>
<div>
  <div style=" margin-top: 10px; display: flex;
               justify-content: center">
      
      <!-- <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="/" style="color: white">
        <i class="fas fa-laptop-house"></i>INICIO</a>
      </v-btn> -->

      <!-- <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./news" style="color: white">
        <i class="far fa-file-alt"></i> News
          </a>
      </v-btn> -->

      <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./preguntas" style="color: white">
        <i class="far fa-question-circle"></i> Preguntas Frecuentes</a>
      </v-btn>

      <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./releases" style="color: white">
        <i class="fas fa-bell"></i>Comunicados
        </a>
      </v-btn>
    </div>

  <div style="display: flex; margin-left: 50px; margin-top: 50px" id="App">

    <div style="margin-left: 10px;">  
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/logoP.png">
          <v-card-title style="color: grey">Noticia #1</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
              </v-card>
    </div>

    <div style="margin-left: 80px;">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/vo199.png"
        >
          <v-card-title style="color: grey">Noticia #2</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div style="margin-left: 80px;">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/logoP.png"
        >
          <v-card-title style="color: grey">Noticia #3</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>

      
    </div>
  </div>
  
  </div>
  
</template>

<script>


</script>