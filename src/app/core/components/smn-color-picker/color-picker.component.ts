import {Component} from "@angular/core";
import {NgForOf} from "@angular/common";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'smn-color-picker',
  templateUrl: './color-picker.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class ColorPickerComponent implements ControlValueAccessor {
  currentColor: string = 'Nenhuma';
  colors = ['#C74D5C', '#7F7EDF', '#ECD06B', '#85A97D']

  private onChange: (color: string) => void = () => {};
  private onTouched: () => void = () => {};

  onClick(event: MouseEvent) {
    const element = event.target as HTMLElement;
    const computedStyle = window.getComputedStyle(element);
    this.currentColor = computedStyle.backgroundColor;
    this.onChange(this.rgbToHex(this.currentColor));
    this.onTouched();
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

  writeValue(color: string): void {
    this.currentColor = color;
  }

  registerOnChange(fn: (color: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: Handle the disabled state of the component
  }
}
