import { ValidationResult } from './validation-result';

export class PaginacaoRetornoDados<T> {
    /**
     *
     */
    constructor() {
        this.dados = new Array<T>();
    }
    
    public dados: T[];
    public totalRegistros: number;
    public Validacao: ValidationResult;
}