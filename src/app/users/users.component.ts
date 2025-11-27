import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  /// traditional Inputs

  @Input({ required: true })
  user!: User;
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
