import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {

  estilo: string = "disable";

  constructor() {}

  trocar() {
    if(this.estilo === "disable") {
      this.estilo = "enable";
    } else {
      this.estilo = "disable";
    }
  }

}
