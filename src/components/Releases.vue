<template>
  <div>
    <div style="margin-left: 50px" id="app">
      <v-btn color="red" text>
        <a href="/"><i class="fas fa-arrow-circle-left"></i> INICIO</a>
      </v-btn>
    </div>
    <v-card
      style="margin-top: 50px; margin-left: 5%"
      :loading="loading"
      class="mx-auto my-12"
      max-width="500;"
    >
      <v-card-title>Comunicado</v-card-title>

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
    </v-card>
  </div>
</template>