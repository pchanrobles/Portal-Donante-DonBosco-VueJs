<template>
    <div class="container">
        <h1>¡UPS!</h1>
        <h3>La página que estás buscando no está aquí.Volver al panel</h3>
        <router-link :to="{ name: 'News' }">Back to the Dashboard</router-link>
    </div>
</template>

<style scoped>
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>