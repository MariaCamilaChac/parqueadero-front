<template>
  
  <h1 class="text-center">Parqueaderos</h1>
  

  <button @click="modificar=false; abrirModal();" type="button" class="btn btn-primary my-4">Nuevo</button>
  <!-- The Modal -->
    <div class="modal" :class="{mostrar: modal}">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header"> 
            <h4 class="modal-title">{{crearParqueadero}}</h4>
            <button @click="cerrarModal();"  type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="my-4">
              <label for="placa">ID Parqueadero</label>
              <input v-model="Parqueadero.idParqueadero" type="text" class="form-control" id="placa" placeholder="ID">
            </div>
            <div class="my-4">
              <label for="marca">Nombre</label>
              <input v-model="Parqueadero.nombre" type="text" class="form-control" id="marca" placeholder="Nombre">
            </div>
            <div class="my-4">
              <label for="TipoVehiculo">Ubicación</label>
              <input v-model="Parqueadero.ubicacion" type="text" class="form-control" id="tipo" placeholder="">
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
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID Parqueadero</th>
          <th scope="col">Nombre</th>
          <th scope="col">Ubicación</th>
          <th scope="col" colspan="2" class="text-center">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="parq in Parqueadero" :key="parq.idParqueadero">
          <th scope="row">{{ parq.idParqueadero }}</th>
          <td>{{ parq.nombre }}</td>
          <td>{{ parq.ubicacion}}</td>
          <td>
            <button  @click="modificar=true; abrirModal(parq);" class="btn btn-warning">Editar</button>
          </td>
          <td>
            <button @click="eliminar(parq.idParqueadero)" class="btn btn-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  
</template>

<script>

 import axios from'axios'

export default{
  
  name: 'Parqueadero',
  
  data() {
      /**return {
          Vehiculo:{},
          url:this.fetch('http://transacionales.pedi.re/api/vehiculos'),
      }**/

      this.listar()
      return {
        Parqueadero: {},
        //Parqueaderos: [],
        url:'http://transacionales.pedi.re/api/parqueaderos',
        
        modificar:true,
        modal:0,
        tituloModal:'',
    }
    },
  
  methods: {

    async listar() {
      
      let Parqueadero = await axios.get(this.url);
      this.Parqueaderos = Parqueadero.data
      //this.Parqueadero = {}//Parqueadero.data
      console.log(this.Parqueaderos)

    },

    eliminar(id){
      console.log(id)
      this.listar();
    },

    guardar() {
      if(this.modificar){
       // let  = axios.put(url+this.id, this.vehiculo);
 
      }else{
        //let  = axios.post(url, this.vehiculo);
      }
      this.cerrarModal();
      this.listar();
    },

    abrirModal(data ={}){
      this.modal=1;
      if(this.modificar){
        this.idParqueadero=data.idParqueadero;
        this.Parqueadero.tituloModal="Modificar Parqueadero";
        this.Parqueadero.nombre=data.nombre;
        this.Parqueadero.ubicacion=data.ubicacion;
      }else{
        this.id=0;
        this.Parqueadero.tituloModal="Crear Parqueadero";
        this.Parqueadero.idParqueadero='';
        this.Parqueadero.nombre='';
        this.Parqueadero.ubicacion='';
      }
    },

    cerrarModal(){
      this.modal=0;
    },

    created() {
    this.listar();
    },
  },

  

};
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
 .mostrar{
  display: list-item;
   opacity: 1;
   background: rgba(75, 56, 143, 0.705);
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
  }

</style>