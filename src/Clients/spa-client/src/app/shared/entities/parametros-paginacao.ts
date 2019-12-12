import { FiltrosPaginacao } from "./filtros-paginacao";

export class ParametrosPaginacao {
    constructor() {
        this.filtros = new Array<FiltrosPaginacao>();
    }

    public filtros: Array<FiltrosPaginacao>;
    public pagina: number;
    public tamanhoPagina: number;
    public campoOrdenacao: string;
    public sentidoOrdenacao: boolean;

    public adicionarFiltro(nomeCampo: string, valorCampo: Array<string>, tipoCampo: string, campoId: string): void {
        let filtro: FiltrosPaginacao = new FiltrosPaginacao();

        // Se o campo já estiver sendo filtrado, remove o filtro do mesmo e reinsere com os novos valores
        this.removerFiltro(nomeCampo);

        if (valorCampo != null && valorCampo.length > 0) {
            let operadorComparacao: string = '';
            if (tipoCampo === 'text') {
                operadorComparacao = 'contains';
            }
            else if (tipoCampo === 'truenull') {
                operadorComparacao = '=?';
            }
            else {
                operadorComparacao = '=';
            }

            filtro.campo = nomeCampo;
            filtro.operadorComparacao = operadorComparacao;
            //TODO: acertar isso
            filtro.valores = valorCampo;

            this.filtros.push(filtro);
        }
    }

    public removerFiltro(nomeCampo) {
        const filtroIndex = this.filtros.findIndex(x => x.campo == nomeCampo);
        if (filtroIndex >= 0)
            this.filtros.splice(filtroIndex, 1);
    }
}
