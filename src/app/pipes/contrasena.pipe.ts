import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show: boolean=true): string {
    let value2='*'.repeat(value.length);
    if (!show){
      return value;
    }else{
      return value2;
    }

    
  }

}
