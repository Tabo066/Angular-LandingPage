import { Component, ElementRef, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  colapso() {
    // Get the sidebar element
    const sidebar = this.el.nativeElement.querySelector('#sidebarMenu');
    // Toggle the 'show' class
    if (sidebar.classList.contains('show')) {
      this.renderer.removeClass(sidebar, 'show');
    } else {
      this.renderer.addClass(sidebar, 'show');
    }
  }
}

  //colapso() {
    // Get the sidebar element
    //const sidebar = this.el.nativeElement.querySelector('#sidebarMenu');
    // Toggle the 'collapse' class
    //this.renderer.toggleClass(sidebar, 'show');
  //}
