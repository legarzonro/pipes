import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Leonardo Garzón';
  nombre2 = 'leonardo gArzón rodríguez';
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la data!'), 3500);
  });

  fecha = new Date();

  video='2340q49sOA0';

  activar=true;

}
