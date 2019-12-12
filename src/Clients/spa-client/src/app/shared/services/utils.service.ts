import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  bindListToParams(params, listName, list) {
    if (list !== null) {
        list.forEach(function (element, index) {
            var objectType = typeof (element);

            // Se o item da lista for de tipo complexo, adiciona o item como tipo complexo
            // (ex.: "key = lista[1].campo, value = valor") senão, adiciona o item como 
            // tipo simples (ex.: "key = lista[1], value = valor")
            if (objectType === "object" && element !== null) {
                for (var property in element) {
                    if (element.hasOwnProperty(property)) {
                        var paramName = listName + '[' + index + '].' + property;

                        params[paramName] = element[property];
                    }
                }
            } else {
                var paramName = listName + '[' + index + ']';

                params[paramName] = element;
            }
        });
    }
  }

  b64toBlob(b64Data, contentType) {
    var sliceSize = 512;
    b64Data = b64Data.replace(/"/g, '');
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');

    var byteCharacters = window.atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
