<template>
  <h1 class="text-center">Gestionar Vehiculos</h1>

  <button @click="modificar=false; abrirModal();" type="button" class="btn btn-primary my-4">Nuevo</button>

  <!-- The Modal -->
    <div class="modal" :class="{mostrar: modal}">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">{{tituloModal}}</h4>
            <button @click="cerrarModal();"  type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="my-4">
              <label for="nombre">Nombre</label>
              <input v-model="Vehiculo.nombre" type="text" class="form-control" id="nombre" placeholder="Vehiculo">
            </div>
            <div class="my-4">
              <label for="descripcion">descripcion</label>
              <input v-model="Vehiculo.descripcion" type="text" class="form-control" id="descripcion" placeholder="Descripcion del Vehiculo">
            </div>
            <div class="my-4">
              <label for="parqueadero">parqueadero</label>
              <input v-model="Vehiculo.parqueaderp" type="number" class="form-control" id="parqueadero" placeholder="Parqueadero del Vehiculo">
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-dismiss="modal">
              Cancelar
            </button>
            <button  @click="guardar();" type="button" class="btn btn-success" data-dismiss="modal">
              Guardar
            </button>


          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import axios from 'axios'

methods: {
    listar() {
      const res = await axios.get(url);
      this.Vehiculos = res.data;
    }
    eliminar(id) {
      const res = await axios.delete(url + id);
      this.listar();
    }
    async guardar() {
      if(this.modificar){
        const res = await axios.put(url+this.id, this.vehiculo);
        // console.log(this.id);
      }else{
        const res = await axios.post(url, this.vehiculo);
      }
      this.cerrarModal();
      this.listar();
    }
    abrirModal(data={}){
      this.modal=1;
      if(this.modificar){
        this.id=data.id;
        this.tituloModal="Modificar Vehiculo";
        this.Vehiculo.nombre=;
        this.Vehiculo.descripcion=;
        this.Vehiculo.parqueadero=;
      }else{
        this.id=0;
        this.tituloModal="Crear Vehiculo";
        this.Vehiculo.nombre='';
        this.Vehiculo.descripcion='';
        this.Vehiculo.parqueadero=1;
      }
    }
    cerrarModal(){
      this.modal=0;
    }
  }
  created() {
    this.listar();
  }
;

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
