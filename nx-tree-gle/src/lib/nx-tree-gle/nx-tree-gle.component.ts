import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IsObjectOrArrayPipe} from "../is-object-or-array.pipe";
import {IsArrayPipe} from "../is-array.pipe";
import {IsObjectPipe} from "../is-object.pipe";

@Component({
  selector: 'nx-tree-gle',
  standalone: true,
  imports: [CommonModule, IsObjectOrArrayPipe, IsArrayPipe, IsObjectPipe],
  providers: [IsObjectOrArrayPipe],
  templateUrl: './nx-tree-gle.component.html',
  styles: ['.fs-small {\n' +
    '  font-size: small;\n' +
    '}\n' +
    '.cursor-pointer {\n' +
    '  cursor: pointer;\n' +
    '}'],
})
export class NxTreeGleComponent {
  @Input() element!: any;
  @Input() otherFunction!: {
    [key: string]: {
      icon?: 'string',
      click?: () => unknown
    }
  };
  @Input() openAll!: EventEmitter<void>;
  @Input() closeAll!: EventEmitter<void>;
  @Input() plSize?: string = '2vw';
  @Input() ptSize?: string = '1vh';
  @Output() changeItemStatus = new EventEmitter<unknown>;
  @Output() listOpenedItem = new EventEmitter<unknown[]>;
  protected openedItemKey: unknown[] = [];

  private isObjectOrArrayPipe = inject(IsObjectOrArrayPipe);

  openCloseItem(key: unknown) {
    this.clickElement(key);
    debugger
    this.element[key + ''].isOpen = !this.element[key + ''].isOpen
    // if (this.openedItemKey.includes(key)) {
    //   this.openedItemKey = this.openedItemKey.filter(i => i !== key);
    //   this.changeItemStatus.emit({[key + '']: 'close'});
    // } else {
    //   this.openedItemKey.push(key);
    //   this.changeItemStatus.emit({[key + '']: 'open'});
    // }
    // this.listOpenedItem.emit(this.openedItemKey);
  }

  clickElement(key?: unknown) {
    this.otherFunction?.[key + '']?.click?.();
  }

  openAllFn(element: any) {
    if (this.isObjectOrArrayPipe.transform(element)) {
      Object.keys(element).forEach((key: string) => {
        this.openedItemKey.push(key);
        this.openAllFn(element[key])
      })
    }

  }

  ngOnInit(): void {
    this.openAll?.subscribe(() => this.openAllFn(this.element));
    this.closeAll?.subscribe(() => this.openedItemKey = []);
  }
}
