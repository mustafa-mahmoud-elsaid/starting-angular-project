import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [CommonModule, CardModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
