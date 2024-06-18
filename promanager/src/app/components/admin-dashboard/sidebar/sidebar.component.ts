import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() selectSection = new EventEmitter<string>();

  onSelectSection(section: string) {
    this.selectSection.emit(section);
  }
}
