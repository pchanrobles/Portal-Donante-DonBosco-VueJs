<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: "App",
  created() {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      const data = {
        usuario: JSON.parse(localStorage.getItem("user")),
        token: JSON.parse(localStorage.getItem("token")),
      };

      if (data) {
        this.$store.commit("SET_USER_DATA", data);
      }
    }
  },
  data: () => ({}),
};
</script>
