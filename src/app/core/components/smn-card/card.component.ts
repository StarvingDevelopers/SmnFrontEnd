import {Component, Input, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'smn-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['../../../sass/main.css']
})

export class CardComponent {
  @Input() color: string = '#343434';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onMouseEnter() {
    const groupsElement = document.getElementById('groups');
    if (groupsElement) {
      this.renderer.setStyle(groupsElement, 'background', `linear-gradient(to bottom, ${this.color} 0%, #343434 50%)`);
      this.renderer.setStyle(groupsElement, 'animation', 'gradientAnimation 3s ease');
      this.addKeyframes();
    }
  }

  // onMouseLeave() {
  //   const groupsElement = document.getElementById('groups');
  //   if (groupsElement) {
  //     this.renderer.setStyle(groupsElement, 'background', 'linear-gradient(to bottom, #343434, #f1f1f1)');
  //   }
  // }

  addKeyframes() {
    const styleSheet = document.styleSheets[0] as CSSStyleSheet;
    const keyframes =
      `@keyframes gradientAnimation {
        0% {background-position: 51% 0%;}
        50% {background-position: 50% 100%;}
        100% {background-position: 51% 0%;}
      }`;

    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }
}
