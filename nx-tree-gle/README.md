# nx-tree-gle
nx-tree-gle is an Angular component designed to display tree-like structures with expandable/collapsible nodes.

## Installation
You can install nx-tree-gle via npm:

`npm install nx-tree-gle`

## Usage
Import NxTreeGeeComponent into your Angular module:

`import { NgModule } from '@angular/core';`

`import { NxTreeGeeComponent } from 'nx-tree-gle';`

`@NgModule({
declarations: [
NxTreeGeeComponent
],
imports: [
// Any necessary modules
],
exports: [
NxTreeGeeComponent
]
})`


### API
#### Inputs
* element (required): The object representing the tree structure to be displayed.
* otherFunction: An object containing functions to be called when an item is clicked.
* openAll: An EventEmitter to trigger opening all tree nodes.
* closeAll: An EventEmitter to trigger closing all tree nodes.
* plSize: The padding-left size of each node (default: '2vw').
* ptSize: The padding-top size of each node (default: '1vh').

#### Outputs
* changeItemStatus: An EventEmitter emitting the status change of an item (open/close).
  *listOpenedItem: An EventEmitter emitting the list of currently opened items.
