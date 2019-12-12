import { Directive, HostListener, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnChanges {


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() appLoading: boolean;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appLoading.currentValue != changes.appLoading.previousValue) {
      this.loadLoading(changes.appLoading.currentValue);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isActive()) {
      console.log(event);
      this.removeLoading();
      this.insertLoading();
    }
  }

  isActive(): boolean {
    var nextSiblingElementRef = this.renderer.nextSibling(this.elementRef.nativeElement);

    return nextSiblingElementRef != null && nextSiblingElementRef != undefined &&
      nextSiblingElementRef.attributes != null && nextSiblingElementRef.attributes != undefined &&
      nextSiblingElementRef.getAttribute('name') == 'divLoading';

  }

  private loadLoading(loading: boolean) {
    if (loading == true) {
      this.insertLoading();
    }
    else {
      this.removeLoading();
    }
  }

  private removeLoading(){
    var nextSiblingElementRef = this.renderer.nextSibling(this.elementRef.nativeElement);
      if (this.isActive()) {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        this.renderer.removeChild(parentElement, this.elementRef.nativeElement.nextSibling);
      }
  }

  private insertLoading() {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    const divLoading = this.renderer.createElement('div');
    const divLoader = this.renderer.createElement('div');
    const divToCenter = this.renderer.createElement('div');

    const parentElementWidth = parentElement.offsetWidth;
    const elementHeight = this.elementRef.nativeElement.offsetHeight;
    const elementWidth = this.elementRef.nativeElement.offsetWidth;
    const elementHeightPx = String(elementHeight) + 'px';
    const elementWidthPx = String(elementWidth) + 'px';

    var elementLeftPosition = 0;
    if (this.elementRef.nativeElement.offsetLeft > 0 && this.elementRef.nativeElement.offsetLeft > parentElement.offsetLeft) {
      elementLeftPosition = this.elementRef.nativeElement.offsetLeft - parentElement.offsetLeft;
    }
    else if (this.elementRef.nativeElement.offsetLeft == 0) {
      elementLeftPosition = this.elementRef.nativeElement.offsetLeft;
    }

    const elementMarginBottomPx = window.getComputedStyle(this.elementRef.nativeElement, null).marginBottom;
    const elementMarginBottom = elementMarginBottomPx.match(/\d+/g).map(Number)[0];

    // const elementPaddingTopPx =  window.getComputedStyle(this.elementRef.nativeElement, null).paddingTop;
    // const elementPaddingTop = elementPaddingTopPx.match(/\d+/g).map(Number)[0];

    // const elementPaddingBottomPx =  window.getComputedStyle(this.elementRef.nativeElement, null).paddingBottom;
    // const elementPaddingBottom = elementPaddingBottomPx.match(/\d+/g).map(Number)[0];

    // const elementHeightWithPadding = Number(elementHeight) + Number(elementPaddingTop) + Number(elementPaddingBottom);

    const loaderSize = 35;


    this.renderer.setAttribute(divLoading, 'name', 'divLoading');
    this.renderer.setStyle(divLoading, 'opacity', 0.9);
    this.renderer.setStyle(divLoading, 'z-index', 999999);
    this.renderer.setStyle(divLoading, 'transition', 'opacity .8s ease-in-out');
    this.renderer.setStyle(divLoading, 'height', elementHeightPx);
    this.renderer.setStyle(divLoading, 'width', elementWidthPx);
    this.renderer.setStyle(divLoading, 'top', 0);
    this.renderer.setStyle(divLoading, 'left', 0);
    this.renderer.setStyle(divLoading, 'background', 'rgb(225,225,225)');
    if (Number(elementLeftPosition) + (Number(elementWidth) * 2) > Number(parentElementWidth)) {
      this.renderer.setStyle(divLoading, 'margin-top', "-" + (Number(elementHeight) + Number(elementMarginBottom)) + 'px');

      this.renderer.setStyle(divLoading, 'margin-left', elementLeftPosition + 'px');
    }
    else {
      this.renderer.setStyle(divLoading, 'margin-left', '-' + elementWidthPx);
    }

    this.renderer.setAttribute(divToCenter, 'name', 'divToCenter');
    this.renderer.setStyle(divToCenter, 'text-align', 'center');

    this.renderer.setAttribute(divLoader, 'name', 'divLoader');
    this.renderer.setStyle(divLoader, 'opacity', 1);
    this.renderer.setStyle(divLoader, 'border', '7px solid #f3f3f3'); /* Light grey */
    this.renderer.setStyle(divLoader, 'border-top', '7px solid #3498db'); /* Blue */
    this.renderer.setStyle(divLoader, 'border-radius', '50%');
    this.renderer.setStyle(divLoader, 'width', loaderSize + 'px');
    this.renderer.setStyle(divLoader, 'height', loaderSize + 'px');
    this.renderer.setStyle(divLoader, 'display', 'inline-block');
    this.renderer.setStyle(divLoader, 'animation', 'spin 2s linear infinite');
    this.renderer.setStyle(divLoader, 'margin-top', (elementHeight / 2) - (loaderSize / 2) + "px");


    this.renderer.appendChild(divLoading, divLoader);

    this.renderer.appendChild(divToCenter, divLoader);
    this.renderer.appendChild(divLoading, divToCenter);

    this.renderer.insertBefore(parentElement, divLoading, this.elementRef.nativeElement.nextSibling);
  }
}
