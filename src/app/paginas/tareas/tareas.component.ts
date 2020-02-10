import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;
  mensaje: string;
  mostrarMensaje: boolean;

  constructor(private servicioTarea: TareasService) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array
    this.tituloNuevo = '';
    this.mostrarMensaje = false;
    this.mensaje = '';

  }// constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    this.cargarTareas();

  }// ngOnInit


  editarEstado(tarea: Tarea) {
    console.debug('click checkbox %o', tarea);
    tarea.completada = !tarea.completada;

    this.mensaje = 'Tarea editada';
    this.mostrarMensaje = true;
    this.servicioTarea.modificar(tarea).subscribe(() => this.cargarTareas());

  }// editarEstado


  eliminar(tarea: Tarea) {
    console.debug('click Eliminar %o', tarea);

    if (confirm('¿Estas seguro?')) {
      console.trace('Confirmado eliminacion');
      this.mensaje = 'Tarea eliminada(id: ' + tarea.id + ', titulo: ' + tarea.titulo + ')';
      this.mostrarMensaje = true;
      this.servicioTarea.eliminar(tarea.id).subscribe(() => this.cargarTareas());

    } else {
      console.trace('Cancelado eliminacion');
    }

  }// eliminar

  nuevaTarea(): void {
    console.debug('click nueva tarea %s', this.tituloNuevo);

    if (this.tituloNuevo.length > 1) {
      // crear objeto Tarea
      const tNueva = new Tarea();
      tNueva.titulo = this.tituloNuevo;
      console.debug(tNueva);
      this.servicioTarea.crear(tNueva).subscribe(data => {
        console.debug('Nueva Tarea creada en json-server %o', data);
        this.tituloNuevo = '';
        this.mensaje = 'Tarea Creada: ' + data.titulo;
        this.mostrarMensaje = true;
        this.cargarTareas();
      });
    }


  }// nuevaTarea


  cerrarMensaje(){
    this.mensaje = "";
    this.mostrarMensaje = false;
  }//cerrarMensaje

  /**
   * Llama al Serviucio para cargar todas las tareas
   * Nos va  aserivr para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(datos => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos;
    });

  }// cargarTareas


}// TareasComponent