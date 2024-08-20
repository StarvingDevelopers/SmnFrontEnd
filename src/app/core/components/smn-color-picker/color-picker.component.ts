import {Component} from "@angular/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'smn-color-picker',
  templateUrl: './color-picker.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class ColorPickerComponent {
  currentColor: string = 'Nenhuma';
  colors = ['#C74D5C', '#7F7EDF', '#ECD06B', '#85A97D']

  onClick(event: MouseEvent) {
    const element = event.target as HTMLElement;
    const computedStyle = window.getComputedStyle(element);
    this.currentColor = computedStyle.backgroundColor;
  }

  rgbToHex(rgb: string): string {
    const result = rgb.match(/\d+/g)?.map(Number);
    if (!result || result.length < 3) return '#000000';
    return `#${this.componentToHex(result[0])}${this.componentToHex(result[1])}${this.componentToHex(result[2])}`;
  }

  componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
}
