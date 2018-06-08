import { Component } from '@angular/core';



@Component({
  selector: 'titulo',
  templateUrl: 'titulo.component.html',
  styleUrls: ['titulo.component.css']
})
export class TituloComponent{
  public name : string = 'hola';

  setMessage(valor): string{
    console.log("hola Juliana")
    return `${valor}: el mensaje se ha usado
          
        Esto va a quedar de otra manera mas bonita no como la fea de juliana al lado
    `;


  }
  public get nombre() : string{
    return 'Este es el nombre Lololol';
  }
}
