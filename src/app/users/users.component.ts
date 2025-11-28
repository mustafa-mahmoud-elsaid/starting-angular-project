import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  /// traditional Inputs

  @Input({ required: true }) user!: User;
  @Input({ required: true }) slectedUser!: boolean;

  // @Output() select1 = new EventEmitter<string>();
  // newer way
  select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // signal inputs note(companies codebase don't use signals yet!)

  /// avatar = input<string>();
  /// name = input<string>();
  /// imagePath = computed(() => {
  ///   return `assets/users/${this.avatar()}`;
  /// });
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
