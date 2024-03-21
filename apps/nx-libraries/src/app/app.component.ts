import {Component, EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NxTreeGleComponent} from "@gle";
import {NxDraggableCarouselComponent} from "@giolongo";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
    imports: [NxWelcomeComponent, RouterModule, NxTreeGleComponent, NxDraggableCarouselComponent, FormsModule],
  selector: 'nx-tree-gle-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-libraries';
  openAll = new EventEmitter();
  closeAll = new EventEmitter();
  automove = 0;
  public elementForCarousel = [
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" height="100px" width="300px">',
    '<div>Ciao 2</div>',
    '<div>Ciao 3</div>'
  ]
  public element = {
    "medications":[{
    "imaging":[{
      "name":"Chest X-Ray",
      "time":"Today",
      "location":"Main Hospital Radiology"
    }]
  }]};
}
