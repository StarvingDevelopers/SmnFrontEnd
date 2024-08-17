import {Component, Input, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'smn-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['../../../sass/main.css']
})

export class CardComponent {
  @Input() color: string = '#343434';

  constructor(private renderer: Renderer2) {}

  onMouseEnter() {
    const gradient = document.querySelector('.gradient');
    const groupsElement = document.querySelector('.groups');

    if (gradient && groupsElement) {
      this.renderer.setStyle(groupsElement, 'z-index', '1');
      this.renderer.setStyle(gradient, 'background', `linear-gradient(to bottom, ${this.color} 1%, #343434 100%)`);
      this.renderer.setStyle(gradient, 'height', '100%');
    }
  }
}

