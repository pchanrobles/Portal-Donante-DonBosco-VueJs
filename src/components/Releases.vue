<template>
  <div style="background-color: #dc001b;">
    <h2 style="color: white; text-align: center;"><br>COMUNICADOS</h2>
    <div >
    <v-card 
    
      style="margin-top: 50px; margin-left: 5%"
      :loading="loading"
      class="mx-auto my-12"
      max-width="500;"
    >
    <div>
      <div style="display: flex;
                justify-content: center; margin-top:0px;">
      <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="/" style="color: white">
        <i class="fas fa-laptop-house"></i></i> INICIO</a>
      </v-btn>

      <!-- <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./Login" style="color: white">
        <i class="fas fa-user-astronaut"></i> LOGIN</a>
      </v-btn> -->

      <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./Preguntas" style="color: white">
        <i class="far fa-question-circle"></i> Preguntas Frecuentes</a>
      </v-btn>

      <v-btn style="background-color: #dc001b; margin-top:15px;">
        <a href="./Profile" style="color: white">
        <i class="fas fa-user-astronaut"></i>PERFIL</a>
      </v-btn>
    </div>
    </div>
      <v-card-title>Comunicado</v-card-title><br>

      <v-card-text>
        <v-row align="center" class="mx-0"> </v-row>
        <v-img> <img src="../assets/vo199.png" alt="" height="200px;" width="300px;"> </v-img>
        <div class="my-4 text-subtitle-1">Don Bosco, ...........</div>

        
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Informacion ....</v-card-title>

      <v-card-text>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ducimus repudiandae reprehenderit corporis a ipsam autem, tempore harum iste vel et repellat adipisci aliquid at est sequi expedita facilis nesciunt.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit facilis unde pariatur dolorem laboriosam, culpa corrupti quibusdam perferendis recusandae amet tempore doloribus minus sunt repellat eveniet soluta doloremque excepturi.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam explicabo minus fugiat, quia expedita modi et doloremque accusamus, placeat tenetur error ducimus commodi quasi suscipit numquam iste at quam.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ducimus repudiandae reprehenderit corporis a ipsam autem, tempore harum iste vel et repellat adipisci aliquid at est sequi expedita facilis nesciunt.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit facilis unde pariatur dolorem laboriosam, culpa corrupti quibusdam perferendis recusandae amet tempore doloribus minus sunt repellat eveniet soluta doloremque excepturi.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam explicabo minus fugiat, quia expedita modi et doloremque accusamus, placeat tenetur error ducimus commodi quasi suscipit numquam iste at quam.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ducimus repudiandae reprehenderit corporis a ipsam autem, tempore harum iste vel et repellat adipisci aliquid at est sequi expedita facilis nesciunt.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit facilis unde pariatur dolorem laboriosam, culpa corrupti quibusdam perferendis recusandae amet tempore doloribus minus sunt repellat eveniet soluta doloremque excepturi.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam explicabo minus fugiat, quia expedita modi et doloremque accusamus, placeat tenetur error ducimus commodi quasi suscipit numquam iste at quam.
       </p>
      </v-card-text>
    </v-card></div>
    <Footer> </Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>