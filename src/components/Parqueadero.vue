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
              <label for="idparqueadero">ID Parqueadero</label>
              <input v-model="Parqueadero.id" type="hidden" class="form-control" id="id" placeholder="ID">
            </div>
            <div class="my-4">
              <label for="nombre">Nombre</label>
              <input v-model="Parqueadero.nombre" type="text" class="form-control" id="nombre" placeholder="Nombre">
            </div>
            <div class="my-4">
              <label for="ubicacion">Ubicación</label>
              <input v-model="Parqueadero.direccion" type="text" class="form-control" id="direccion" placeholder="">
            </div>
            <div class="my-4">
              <label for="ubicacion">Bahías</label>
              <input v-model="Parqueadero.numero_bahias" type="number" class="form-control" id="numero_bahias" placeholder="">
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
          <th scope="col"># Bahias</th>
          <th scope="col" colspan="2" class="text-center">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="parq in Parqueaderos" :key="parq.id">
          <th scope="row">{{ parq.id }}</th>
          <td>{{ parq.Nombre }}</td>
          <td>{{ parq.Ubicacion}}</td>
          <td>{{ parq.bahias.length}}</td>
          <td>
            <button  @click="modificar=true; abrirModal(parq.id);" class="btn btn-warning">Editar</button>
          </td>
          <td>
            <button @click="eliminar(parq.id)" class="btn btn-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  
</template>

<script>

 import axios from '../axios'

export default{
  
  name: 'Parqueadero',
  
  
  data() {
      /**return {
          Vehiculo:{},
          url:this.fetch('http://transacionales.pedi.re/api/vehiculos'),
      }**/

      this.listar()
      return {
        url:'/api/parqueaderos/',
        Parqueadero: {
          nombre:'yy',
          ubicacion:'yuu',
        },
        Parqueaderos: [],

        request:{},
               
        modificar:true,
        modal:0,
        tituloModal:'',
    };
    },
  
  methods: {

    async listar() {
      
      let Parqueadero = await axios.get('/api/parqueaderos');
      this.Parqueaderos = Parqueadero.data.data

      //this.Parqueadero = {}//Parqueadero.data
      console.log(this.Parqueaderos)

    },

    async eliminar(id){
      await axios.delete(this.url+id);
      this.listar();
    },

    async guardar() {
      if(this.modificar){
        console.log(this.url+this.Parqueadero.id)
        console.log(this.Parqueadero)
        await axios.put(this.url+this.Parqueadero.id, this.Parqueadero);
 
      }else{
        console.log(this.Parqueadero)
        await axios.post('/api/parqueaderos', this.Parqueadero);
      }
      this.cerrarModal();
      this.listar();
    },

    async abrirModal(id){
      this.modal=1;
      if(this.modificar){
        let res = await axios.get(this.url+id)
        this.Parqueadero.id=res.data.id;
        this.Parqueadero.tituloModal="Modificar Parqueadero";
        this.Parqueadero.nombre=res.data.Nombre;
        this.Parqueadero.direccion=res.data.Ubicacion;
        this.Parqueadero.numero_bahias=res.data.bahias.length;
        console.log(res)  
      }else{
        this.id=0;
  
        this.Parqueadero.tituloModal="Crear Parqueadero";
        this.Parqueadero.id='';
        this.Parqueadero.nombre='';
        this.Parqueadero.direccion='';
        this.Parqueadero.numero_bahias='';
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