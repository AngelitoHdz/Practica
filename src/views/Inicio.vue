<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico</label>
        <input type="email" v-model="email" required placeholder="Ingresa tu correo electrónico" />
      </div>

      <div>
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" required placeholder="Ingresa tu contraseña" />
      </div>

      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'InicioSesionPage',
  data() {
    return {
      email: '',
      password: '',
      error: null, // Para manejar errores
    };
  },
  methods: {
    submitForm() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        const email = this.email.trim().toLowerCase();
        const password = this.password.trim();

        // Comparar los datos ingresados con los datos almacenados
        if (email === user.email && password === user.password) {
          alert('Inicio de sesión exitoso');
          localStorage.setItem('sessionActive', 'true');  // Marcar la sesión como activa
          this.error = null;  // Limpiar cualquier error
          this.$router.push('/');  // Redirigir a la página principal
        } else {
          this.error = 'Correo o contraseña incorrectos.';  // Mostrar error
        }
      } else {
        this.error = 'No hay un usuario registrado con este correo.';  // Error si no hay usuario
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}

button:hover {
  background-color: #369e72;
}

p {
  color: red;
  margin-top: 10px;
}
</style>
