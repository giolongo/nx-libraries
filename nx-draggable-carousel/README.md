# nx-draggable-carousel
nx-draggable-carousel is an Angular component designed to show draggable carousel.

## Installation
You can install nx-draggable-carousel via npm:

`npm install @giolongo/nx-draggable-carousel`

## Demo

[Simple Demo](https://giolongo.github.io/nx-libraries-demo/#/nx-draggable-carousel).

## Usage
Import NxDraggableCarouselComponent into your Angular module:

`import { NgModule } from '@angular/core';`

`import {NxDraggableCarouselComponent} from "@giolongo/nx-draggable-carousel";`

`@NgModule({
declarations: [
NxDraggableCarouselComponent
],
imports: [
// Any necessary modules
],
exports: [
NxDraggableCarouselComponent
]
})`

In Standalone Component

`
import {NxDraggableCarouselComponent} from "@giolongo/nx-draggable-carousel";
@Component({
selector: 'app-nx-draggable-carousel-use',
standalone: true,
imports: [
NxDraggableCarouselComponent,
],
templateUrl: './nx-tree-gle-use.component.html',
styleUrl: './nx-tree-gle-use.component.scss'
})
`

### API
#### Inputs
* classContainer: string for define css class for carousel container.
* classElement: string for define css class for carousel element.
* debounceAutoMove: millisecond for define carousel's automove. 0 for not automove.
* maxHeight (required): string for define max height of carousel.
* elementHeight (required): string for define height of carousel's element.
* maxWidth (required): string for define max width of carousel.
* elementWidth (required): string for define width of carousel's element.
* elements (required): array of string. It contains the html of single carousel's elements.
