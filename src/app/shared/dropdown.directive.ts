import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click') toggleClick() {
    this.dropdownParentEl.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
