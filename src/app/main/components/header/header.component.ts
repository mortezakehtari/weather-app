import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output('onLogout') logout: EventEmitter<boolean> = new EventEmitter<boolean>()

  onlogout() {
    this.logout.emit(true);
  }
}
