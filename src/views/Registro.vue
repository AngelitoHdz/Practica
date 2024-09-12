<template>
  <div class="register-container">
    <h1>Crear Cuenta</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nombre Completo</label>
        <input type="text" v-model="name" required placeholder="Ingresa tu nombre completo" />
      </div>

      <div>
        <label for="email">Correo Electrónico</label>
        <input type="email" v-model="email" required placeholder="Ingresa tu correo electrónico" />
      </div>

      <div>
        <label for="phone">Teléfono</label>
        <input type="tel" v-model="phone" required placeholder="Ingresa tu número de teléfono" />
      </div>

      <div>
        <label for="address">Dirección</label>
        <input type="text" v-model="address" required placeholder="Ingresa tu dirección" />
      </div>

      <div>
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" required placeholder="Ingresa tu contraseña" />
      </div>

      <div>
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" v-model="confirmPassword" required placeholder="Confirma tu contraseña" />
      </div>

      <button type="submit">Registrarse</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'RegistroPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Las contraseñas no coinciden.';
        return;
      }

      const user = {
        name: this.name.trim(),
        email: this.email.trim().toLowerCase(),
        phone: this.phone.trim(),
        address: this.address.trim(),
        password: this.password.trim(),
      };

      localStorage.setItem('user', JSON.stringify(user));
      alert('Usuario registrado con éxito');
      this.error = null;
      this.$router.push('/inicio');
    },
  },
};
</script>

<style scoped>
.register-container {
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
