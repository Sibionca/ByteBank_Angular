import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor?: number;
  destino?: number;

  transferir(): void {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
      error => console.log(error)
    );
    this.router.navigateByUrl('extrato');

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
