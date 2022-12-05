import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {  
  @Input() nome: string= '';
  @Input() imagem: string= '';
  @Input() ator: string= '';
  @Input() nomeAtor: string= '';
  @Input() descricao: string= '';
  



}
