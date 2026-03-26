import { Component, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slides',
  imports: [],
  templateUrl: './slides.html',
  styleUrl: './slides.css'
})
export class Slides implements AfterViewInit, OnDestroy {
  private totalItens = 4;
  private count = 1;
  private intervalId: any;
  
  ngAfterViewInit(): void {
    const first = document.getElementById('radio1') as HTMLInputElement | null;
    if (first) { first.checked = true; }
    
    for (let i = 1; i <= this.totalItens; i++) {
      const radio = document.getElementById('radio' + i) as HTMLInputElement | null;
      if (radio) {
        radio.addEventListener('change', () => this.onRadioChange(i));
      }
    }

    this.intervalId = setInterval(() => this.nextImage(), 4000);
  }
  
  ngOnDestroy(): void {
    if (this.intervalId) { 
      clearInterval(this.intervalId); 
    }
  }

  private onRadioChange(index: number): void {
    this.count = index;
    this.resetInterval();
  }

  private resetInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => this.nextImage(), 4000);
  }

  private nextImage(): void {
    this.count = this.count >= this.totalItens ? 1 : this.count + 1;
    
    const radio = document.getElementById('radio' + this.count) as HTMLInputElement | null;
    if (radio) {
      radio.checked = true; 
    }
  }
}
