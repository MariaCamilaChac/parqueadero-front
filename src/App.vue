<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Usuarios</router-link>
      <div class="navbar-nav mr-auto">
       <li class="nav-item">
          <router-link to="/Parqueadero" class="nav-link">Parqueaderos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Vehiculo" class="nav-link">Vehiculos</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "#app"
};
</script>