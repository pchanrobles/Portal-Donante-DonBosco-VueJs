<template>
  <v-stepper
    v-model="e13"
    vertical
  >
    <v-stepper-step
      step="1"
      complete
    >
      Name of step 1
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e13 = 2"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      step="2"
      complete
    >
      Name of step 2
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e13 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :rules="[() => false]"
      step="3"
    >
      Ad templates
      <small>Alert message</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e13 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View setup instructions
    </v-stepper-step>

    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e13 = 1"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>                    
</template>

<script>


export default {
 data () {
      return {
        e13: 2,
      }
    },
}

</script>

<style>
.check {
width:30px;
height:30px;
}
.v-application--wrap{
  justify-content: center !important;
  background-color:#DADCDE;
}
.bosco{
  height: 20%;
  width: 20%;
  position: relative;
  left: 38%;
}
.donante{
   
    color:#DC001B ;
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    line-height: normal;
    position: relative;
    transition: inherit;
    


}
.v-input--selection-controls{
  margin: 0!important;
  padding: 0!important;
}
.v-card__actions {
    display: block;
 }
 .layout{
   display: unset !important;
 }
 

</style>
