import { Component, OnInit, Input, EventEmitter, Output, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxComponent),
      multi: true
    }]
})
export class ComboboxComponent implements OnInit, ControlValueAccessor, OnChanges {
  itensFiltrados: any[];
  texto: string;
  disabled: boolean;

  private onChangeCallback: (_: any) => void;
  private onTouchedCallback: () => void;

  @Input() formControlName: string;
  @Input() itens: any[];
  @Input() nomeItem: any;
  @Input() codigoItem: string;
  @Input() ngModel: any;
  @Output() onSelectItem = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    if (this.disabled == null)
      this.disabled = false;

    this.carregar();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Utilizando o onChanges para carregar os itens
    this.carregar();
  }


  writeValue(obj: any): void {
    this.ngModel = obj;

    if (obj) {
      this.texto = obj[this.nomeItem];
      this.codigoItem = obj[this.codigoItem];
    } else {
      this.texto = "";
      this.codigoItem = "";
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  carregar() {
    this.filtrar();
  }

  filtrar(text?: string) {
    this.itensFiltrados = this.itens;
    if (text != null && text.length > 0) {
      this.itensFiltrados =
        this.itensFiltrados.filter(it => (it[this.nomeItem] != null && it[this.nomeItem] != undefined) ? it[this.nomeItem].toUpperCase().indexOf(text.toUpperCase()) !== -1 : null);
    }

    if (this.itensFiltrados) {
      if (text) {
        this.itensFiltrados = this.filtrarInputPrimeiro(text, this.itensFiltrados);
      }

      if (this.itensFiltrados.length > 10) {
        var lista = this.itensFiltrados.slice(0, 10);
        this.itensFiltrados = lista;
      }
    }
  }

  filtrarInputPrimeiro(input, data) {
    var first = [];
    var others = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i][this.nomeItem].toUpperCase().indexOf(input.toUpperCase()) == 0) {
        first.push(data[i]);
      } else {
        others.push(data[i]);
      }
    }

    first.sort();
    others.sort();
    return (first.concat(others));
  }

  selecionar(item: any): void {
    this.ngModel = item;

    if (item) {
      this.texto = item[this.nomeItem];
      this.codigoItem = item[this.codigoItem];
    }

    this.onChangeCallback(item);
    this.onSelectItem.emit(item);
  }

  onTextBlur(text: string) {
    if (text == null || text == "" || this.ngModel == null) {
      this.selecionar(null);
    } else {
      this.texto = this.ngModel[this.nomeItem];
    }

  }

  onClick($event): void {
    // Ao clicar no textbox, seleciona o conteúdo do mesmo
    $event.srcElement.select();
  }

  // Se clicar nas reticências, não fecha o dropdownlist
  onReticenciasClick($event): void{
    $event.stopPropagation();
  }
}