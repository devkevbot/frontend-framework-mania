import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() id!: number;
  @Input() desc!: string;
  @Input() done!: boolean;
  @Input() toggleDone!: Function;
  @Input() deleteTodo!: Function;
}
