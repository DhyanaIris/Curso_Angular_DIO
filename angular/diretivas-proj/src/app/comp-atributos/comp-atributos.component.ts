import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {

  estilo: string = "disable";
  corFundo: string = "blue";
  corDaFonte: string = "yellow";
  item: string = "";
  lista: string[] = [];
  isEnableBlock: boolean = true;

  constructor() {}

  adicionarLista() {
    this.lista.push(this.item);
  }

  trocar() {
    if(this.estilo === "disable") {
      this.estilo = "enable";
    } else {
      this.estilo = "disable";
    }
  }

}
