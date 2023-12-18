import {Component, NgModule, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ListStgComponent} from "./components/list-stg/list-stg.component";
import { AssignmentInterfaceComponent } from './affectation/affectation.component';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListStgComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTpApp';
  showPresenceColumn = true;

  togglePresenceColumn() {
    this.showPresenceColumn = !this.showPresenceColumn;

  }
@NgModule({
  declarations: []

})
}

