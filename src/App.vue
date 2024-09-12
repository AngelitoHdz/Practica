<template>
  <div id="app">
    <main>
      <div v-if="loggedIn" class="user-info">
        <span>Hola, {{ userName }}!</span>
        <button @click="logout">Cerrar Sesión</button>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false, // Verifica si el usuario ha iniciado sesión
      userName: '',    // Nombre del usuario
    };
  },
  mounted() {
    // Verificar si el usuario ha iniciado sesión y si la sesión está activa
    this.checkSession();
  },
  methods: {
    checkSession() {
      const storedUser = localStorage.getItem('user');
      const sessionStatus = localStorage.getItem('sessionActive');

      // Verificar si el usuario existe y si la sesión está activa
      if (storedUser && sessionStatus === 'true') {
        const user = JSON.parse(storedUser);
        this.userName = user.name;  // Mostrar el nombre del usuario
        this.loggedIn = true;  // Cambiar estado a "logueado"
      } else {
        this.loggedIn = false;  // Cambiar estado a "no logueado"
      }
    },
    logout() {
      // Solo marcar la sesión como inactiva
      localStorage.setItem('sessionActive', 'false');
      this.loggedIn = false;  // Cambiar estado a "no logueado"
      this.userName = '';  // Limpiar el nombre del usuario
      this.$router.push('/inicio');  // Redirigir a la página de inicio de sesión
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

button {
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #ff4c4c;
}

main {
  margin-top: 20px;
}
</style>
