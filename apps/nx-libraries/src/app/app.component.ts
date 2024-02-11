import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NxTreeGleComponent} from "@gle";

@Component({
  standalone: true,
    imports: [NxWelcomeComponent, RouterModule, NxTreeGleComponent],
  selector: 'nx-tree-gle-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-libraries';
  public element = {
    "medications":[{
    "imaging":[{
      "name":"Chest X-Ray",
      "time":"Today",
      "location":"Main Hospital Radiology"
    }]
  }]};
}
