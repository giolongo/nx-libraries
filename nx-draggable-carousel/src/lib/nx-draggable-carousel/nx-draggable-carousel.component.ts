import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-draggable-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-draggable-carousel.component.html'
})
export class NxDraggableCarouselComponent {
  @Input() classContainer!: string;
  @Input() classElement!: string;
  @Input() maxHeight!: string;
  @Input() elementHeight!: string;
  @Input() maxWidth!: string;
  @Input() elementWidth!: string;
  @Input() elements!: string[];

 private isMouseDown = false;
 private xStartPosition: number = 0;
 private moveLeft: number = 0;

  @ViewChild('scrollableElement') scrollableElement!: ElementRef;

  startDragging(event: MouseEvent) {
    this.isMouseDown = true;
    this.xStartPosition = event.pageX - this.scrollableElement.nativeElement.offsetLeft;
    this.moveLeft = this.scrollableElement.nativeElement.scrollLeft;
  }

  stopDragging() {
    this.isMouseDown = false;
  }

  moveEvent(event: MouseEvent) {
    event.preventDefault();
    if (this.isMouseDown) {
      const x = event.pageX - this.scrollableElement.nativeElement.offsetLeft;
      const scroll = x - this.xStartPosition;
      this.scrollableElement.nativeElement.scrollLeft = this.moveLeft - scroll;
    }
  }
}
