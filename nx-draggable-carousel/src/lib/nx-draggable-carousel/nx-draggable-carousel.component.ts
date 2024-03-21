import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-draggable-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-draggable-carousel.component.html'
})
export class NxDraggableCarouselComponent implements OnChanges{
  @Input() classContainer!: string;
  @Input() classElement?: string;
  @Input() debounceAutoMove!: number;
  @Input({ required: true }) maxHeight!: string;
  @Input({ required: true }) elementHeight!: string;
  @Input({ required: true }) maxWidth!: string;
  @Input({ required: true }) elementWidth!: string;
  @Input({ required: true }) elements!: string[];

 public isMouseDown = false;
 private xStartPosition: number = 0;
 private moveLeft: number = 0;

 private interval = 0;

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

  ngOnInit(): void {
    if(this.debounceAutoMove){
      setInterval(() => {
        this.scrollableElement.nativeElement.scrollTo(this.scrollableElement.nativeElement.scrollLeft + 1, 0)
      }, this.debounceAutoMove)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['debounceAutoMove']){
      clearInterval(this.interval);
      debugger;
      if(+this.debounceAutoMove) {
        this.scrollableElement.nativeElement.scrollLeft = 0;
        this.interval = setInterval(() => {
          this.scrollableElement.nativeElement.scrollTo(this.scrollableElement.nativeElement.scrollLeft + 1, 0)
        }, this.debounceAutoMove)
      }
    }
  }
}
