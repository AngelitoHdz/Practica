<template>
  <div class="home-container">
    <!-- Mensaje principal de bienvenida -->
    <h1>Bienvenido a la Página Principal</h1>

    <!-- Mostrar el nombre del usuario si está logueado -->
    <h2 v-if="loggedIn">Bienvenido, {{ userName }}!</h2>
    
    <p v-if="!loggedIn">Elige una opción para continuar:</p>

    <!-- Botón Cerrar Sesión visible solo si está logueado -->
    <div v-if="loggedIn" class="logout-button">
      <button @click="logout">Cerrar Sesión</button>
    </div>

    <!-- Botones de Iniciar Sesión y Registrarse solo si no está logueado -->
    <div v-if="!loggedIn" class="buttons">
      <router-link to="/inicio">
        <button>Iniciar Sesión</button>
      </router-link>
      <router-link to="/registro">
        <button>Registrarse</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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

      // Verificar si el usuario está logueado y la sesión está activa
      if (storedUser && sessionStatus === 'true') {
        const user = JSON.parse(storedUser);
        this.userName = user.name;  // Mostrar el nombre del usuario
        this.loggedIn = true;  // Cambiar estado a "logueado"
      } else {
        this.loggedIn = false;  // Cambiar estado a "no logueado"
      }
    },
    logout() {
      // Marcar la sesión como inactiva
      localStorage.setItem('sessionActive', 'false');
      this.loggedIn = false;  // Cambiar estado a "no logueado"
      this.userName = '';  // Limpiar el nombre del usuario

      // Redirigir a la página principal después de cerrar sesión
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 100px auto;
  text-align: center;
  background-color: #f0f4f8;
  padding: 40px 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 15px;
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
}

h2 {
  margin-bottom: 30px;
  font-size: 1.8em;
  color: #42b983;
}

p {
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #666;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 12px 20px;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369e72;
}

/* Estilo para el botón de Cerrar Sesión */
.logout-button {
  margin-top: 20px;
}

.logout-button button {
  background-color: #ff6b6b;
}

.logout-button button:hover {
  background-color: #ff4c4c;
}
</style>
