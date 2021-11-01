<template>
  <h1 class="text-center">Parqueadero Transaccional</h1>

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
              <label for="placa">placa</label>
              <input v-model="Vehiculo.placa" type="text" class="form-control" id="placa" placeholder="Vehiculo">
            </div>
            <div class="my-4">
              <label for="marca">descripcion</label>
              <input v-model="Vehiculo.marca" type="text" class="form-control" id="marca" placeholder="Marca del Vehiculo">
            </div>
            <div class="my-4">
              <label for="TipoVehiculo"></label>
              <input v-model="Vehiculo.tipo" type="number" class="form-control" id="tipo" placeholder="Tipo de Vehiculo">
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

export default{
  
  name: 'componente1',
  
  data() {
      return {
          Vehiculo:false,
          url:''//this.http://transacionales.pedi.re/api/personas
      }
    },
  
  methods: {

    listar() {
      // let res = axios.get(url);
      this.Vehiculo = {}//res.data;
    },

    eliminar(id){
      console.log(id)
      // let res = axios.delete(url + id);
      this.listar();
    },

    guardar() {
      if(this.modificar){
        // let res = axios.put(url+this.id, this.vehiculo);
 
      }else{
        // let res = axios.post(url, this.vehiculo);
      }
      this.cerrarModal();
      this.listar();
    },

    abrirModal(data={}){
      this.modal=1;
      if(this.modificar){
        this.id=data.id;
        this.tituloModal="Modificar Vehiculo";
        this.Vehiculo.placa='';
        this.Vehiculo.marca='';
        this.Vehiculo.tipo='';
      }else{
        this.id=0;
        this.tituloModal="Crear Vehiculo";
        this.Vehiculo.placa='';
        this.Vehiculo.marca='';
        this.Vehiculo.tipo=1;
      }
    },

    cerrarModal(){
      this.modal=0;
    },

    created() {
    this.listar();
  }
  }
  

}



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