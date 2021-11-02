<template>
  
  <h1 class="text-center">Vehículos</h1>
  

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
              <label for="placa">Placa</label>
              <input v-model="Vehiculo.placa" type="text" class="form-control" id="placa" placeholder="Vehiculo">
            </div>
            <div class="my-4">
              <label for="marca">Descripcion</label>
              <input v-model="Vehiculo.marca" type="text" class="form-control" id="marca" placeholder="Marca del Vehiculo">
            </div>
            <div class="my-4">
              <label for="TipoVehiculo">Tipo de Vehículo</label>
              <input v-model="Vehiculo.tipo" type="text" class="form-control" id="tipo" placeholder="Tipo de Vehiculo">
            </div>
            <div class="my-4">
              <label for="idpersona">Propietario</label>
              <input v-model="Vehiculo.idPersona" type="integer" class="form-control" id="idpersona" placeholder="Propietario del Vehiculo">
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
          <th scope="col">Placa</th>
          <th scope="col">Marca</th>
          <th scope="col">Tipo</th>
          <th scope="col">Propietario</th>
          <th scope="col" colspan="2" class="text-center">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="veh in Vehiculo" :key="veh.placa">
          <th scope="row">{{ veh.placa }}</th>
          <td>{{ veh.Marca }}</td>
          <td>{{ veh.tipo }}</td>
          <td>{{ veh.idpersona }}</td>
          <td>
            <button  @click="modificar=true; abrirModal(veh);" class="btn btn-warning">Editar</button>
          </td>
          <td>
            <button @click="eliminar(veh.placa)" class="btn btn-danger">
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
  
  name: 'Vehiculo',
  
  data() {
      /**return {
          Vehiculo:{},
          url:this.fetch('http://transacionales.pedi.re/api/vehiculos'),
      }**/
      this.listar()
      return {
        //Vehiculo: {},
        url:'http://transacionales.pedi.re/api/vehiculos',
        
        Vehiculo:{
        placa:'yy',
        marca:'',
        tipo:'yuu',
        propietario:'',
        
      },

        modificar:true,
        modal:0,
        tituloModal:'',
    };
    },
  
  methods: {

    async listar() {
      let res = await axios.get(this.url)
      this.Vehiculo = res;
      console.log(this.Vehiculo)
    },

    eliminar(id){
      console.log(id)
      this.listar();
    },

    async guardar() {
      if(this.modificar){
        let res = await axios.put(this.url+this.id, this.vehiculo);
        console.log(res)
 
      }else{
        let res = await axios.post(this.url, this.vehiculo);
        console.log(res)
    
      }
      this.cerrarModal();
      this.listar();
    },

    abrirModal(data ={}){
      this.modal=1;
      if(this.modificar){
        this.placa=data.placa;
        this.tituloModal="Modificar Vehiculo";
        this.Vehiculo.marca='';
        this.Vehiculo.idPersona='';
        this.Vehiculo.idtipo='';
      }else{
        this.id=0;
        this.tituloModal="Crear Vehiculo";
        this.Vehiculo.placa='';
        this.Vehiculo.marca='';
        this.Vehiculo.idPersona='';
        this.Vehiculo.tipo='';
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