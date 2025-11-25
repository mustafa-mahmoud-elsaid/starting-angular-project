import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
function getRandIdx() {
  const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);
  return randomIdx;
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  selectedUser = signal(DUMMY_USERS[getRandIdx()]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);
  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }
  onSelectUser() {
    this.#changeUser();
    console.log('user clicked!');
  }
  #changeUser() {
    this.selectedUser.set(DUMMY_USERS[getRandIdx()]);
  }
}
