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
  styles: [
    '.cursor-pointer {\n' +
    '  cursor: pointer;\n' +
    '}'],
})
export class NxTreeGleComponent {
  @Input() element!: any;
  @Input() otherFunction?: {
    [key: string]: {
      icon?: 'string',
      click?: () => unknown
    }
  };
  @Input() openAll!: EventEmitter<void>;
  @Input() closeAll!: EventEmitter<void>;
  @Input() plSize?: string = '2vw';
  @Input() ptSize?: string = '1vh';
  @Input() openDefaultIcon?: string;
  @Input() closeDefaultIcon?: string;
  @Output() changeItemStatus = new EventEmitter<unknown>;
  @Output() listOpenedItem = new EventEmitter<unknown[]>;
  protected openedItemKey: unknown[] = [];

  private isObjectOrArrayPipe = inject(IsObjectOrArrayPipe);

  openCloseItem(key: unknown, parent: unknown) {
    debugger;
    const newKey = parent ? parent+'.'+key : key;
    this.clickElement(key);
    if (this.openedItemKey.includes(newKey)) {
      this.openedItemKey = this.openedItemKey.filter(i => i !== newKey);
      this.changeItemStatus.emit({[key + '']: 'close'});
    } else {
      this.openedItemKey.push(newKey);
      this.changeItemStatus.emit({[key + '']: 'open'});
    }
    this.listOpenedItem.emit(this.openedItemKey);
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
