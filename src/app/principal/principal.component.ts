import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {
  btnCadastro: boolean = true;


  clientes: Cliente[] = [];

  constructor(private servico: ClienteService) { }


  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);

  }

ngOnInit(){
  this.selecionar();
}

}
