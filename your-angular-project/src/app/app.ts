import { Component, OnInit, AfterViewInit, ElementRef, Renderer2  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes'; 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App implements OnInit, AfterViewInit{
menuOption: string = '';
onOption(menuOption: string){
  this.menuOption = menuOption;
}



  protected title = 'your-angular-project';

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.setupDarkModeToggle();
    this.setupCarousel();
  }

  // Function to handle dark mode toggle
  private setupDarkModeToggle(): void {
    const toggleBtn = document.getElementById('toggle-btn');
    if (toggleBtn) {
      const actualizarTextoBoton = (isDark: boolean) => {
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
      };
      
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        actualizarTextoBoton(isDark);
        localStorage.setItem('darkMode', isDark.toString());
      });

      window.addEventListener('DOMContentLoaded', () => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        if (savedMode) {
          document.body.classList.add('dark-mode');
        }
        actualizarTextoBoton(savedMode);
      });
    }
  }
    // Function to setup carousel interaction
  private setupCarousel(): void {
    const carousel = document.getElementById('productCarousel') as HTMLElement;
    const items = carousel?.querySelectorAll('.carousel-item') || [];
    
    carousel?.addEventListener('slid.bs.carousel', () => {
      const carouselInner = carousel.querySelector('.carousel-inner') as HTMLElement;
      if (carousel.querySelector('.carousel-item-next') === items[items.length - 1]) {
        setTimeout(() => {
          carouselInner.style.transition = 'none';
          carouselInner.style.transform = 'translateX(0)';
          setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
          }, 50);
        }, 300);
      } else {
        carouselInner.style.transition = 'transform 0.5s ease';
      }
    });
  }
}
    



