import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  produtos: string[] = [];
  menuType: string = "asd";

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {

  }

  adicionar() {
    this.produtos.push("dhyana");
    // this.produtos.pop()
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
