import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Leonardo Garzón';
  PI = Math.PI;
  a = 0.234;
  salario=1234.5;
  heroe={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500
  }

}
