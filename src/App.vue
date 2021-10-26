<template>
  <router-view></router-view>
</template>

<script>
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');
const PUSHER_APP_ID = 1286271,
PUSHER_APP_KEY = '10b3fa80e2d6cb257445',
PUSHER_APP_SECRET='28e8dc42730311ea140f',
PUSHER_APP_CLUSTER='eu';

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: PUSHER_APP_KEY,
    cluster: PUSHER_APP_CLUSTER,
    forceTLS: true
});
export default {
  name: "App",

  mounted(){
    window.Echo.channel('Comunicados-tracker')
    .listen('ComunicadoStatusEvent', (e)=>{
      console.log('OMG REALTIME')
    });
  },
      created() {
      if(localStorage.getItem('user') && localStorage.getItem('token')) {
          const data = {
              usuario: JSON.parse(localStorage.getItem('user')),
              token: JSON.parse(localStorage.getItem('token'))
          }
          if (data) {
              this.$store.commit('SET_USER_DATA', data)
          }
      }
    },
  data: () => ({
    
  }),
};
</script>
