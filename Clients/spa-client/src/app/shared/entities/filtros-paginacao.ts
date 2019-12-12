export class FiltrosPaginacao {
    constructor() {
        this.valores = new Array<string>();
    }

    public campo: string;
    public valores: Array<string>;
    public operadorComparacao: string;
}
