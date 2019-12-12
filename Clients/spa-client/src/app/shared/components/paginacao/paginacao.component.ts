import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit, OnChanges {

  @Input() paginaAtual: number;
  @Input() totalItens: number;
  @Input() tamanhoPagina: number;
  @Output() selecionarPagina = new EventEmitter<any>();

  paginas: Array<number>;
  numeroMostradoInicioPaginacao: number;
  numeroMostradoFimPaginacao: number;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItens != null) {
      this.transformarTotalItensEmPaginas(1);
    }

    if (changes.paginaAtual != null) {
      this.transformarTotalItensEmPaginas(changes.paginaAtual.currentValue);
    }
  }

  transformarTotalItensEmPaginas(paginaSelecionada: number) {
    this.paginas = new Array<number>();

    this.definirInicioFimNumerosMostradosPaginacao(paginaSelecionada);

    for (var i = this.numeroMostradoInicioPaginacao; i <= this.numeroMostradoFimPaginacao; i++) {
      this.paginas.push(i);
    }
  }

  aoClicarNaPagina(paginaClicada: number) {
    this.paginaAtual = paginaClicada;

    this.selecionarPagina.emit({ paginaClicada: this.paginaAtual });
  }

  seguirProximaPagina() {
    if (this.paginaAtual < this.calcularQtdPaginas())
      this.paginaAtual++;

    this.selecionarPagina.emit({ paginaClicada: this.paginaAtual });
  }

  seguirPaginaAnterior() {
    if (this.paginaAtual > 1)
      this.paginaAtual--;

    this.selecionarPagina.emit({ paginaClicada: this.paginaAtual });
  }

  private definirInicioFimNumerosMostradosPaginacao(paginaSelecionada: number) {
    let totalPaginas: number = this.calcularQtdPaginas();
    this.numeroMostradoInicioPaginacao = 1;
    this.numeroMostradoFimPaginacao = this.calcularQtdPaginas();

    if (paginaSelecionada > 6) {
      this.numeroMostradoInicioPaginacao = paginaSelecionada - 5;

      if (paginaSelecionada + 4 < totalPaginas) {
        this.numeroMostradoFimPaginacao = paginaSelecionada + 4;
      }
    } else if (paginaSelecionada <= 6 && totalPaginas > 10) {
      this.numeroMostradoFimPaginacao = 10;
    } else {
      this.numeroMostradoFimPaginacao = totalPaginas;
    }
  }

  private calcularQtdPaginas(): number {
    var qtdPaginas = Math.ceil(this.totalItens / this.tamanhoPagina);
    return qtdPaginas;
  }
}
