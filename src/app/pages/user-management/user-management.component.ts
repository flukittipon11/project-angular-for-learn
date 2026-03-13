import { Component } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ListItemComponent } from '../../components/list-item/list-item.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [DragDropModule, ListItemComponent],
  template: `
    <div class="container">
      <h3>จัดการรายการข้อมูล</h3>

      <div cdkDropList class="drop-list" (cdkDropListDropped)="onDrop($event)">
        @for (item of dataList; track item.id) {
        <div cdkDrag class="drag-box">
          <app-list-item ...></app-list-item>
        </div>
        }
      </div>
    </div>
  `,
})
export class UserManagementComponent {
  dataList = [
    { id: 1, name: 'รายการที่ 1' },
    { id: 2, name: 'รายการที่ 2' },
    { id: 3, name: 'รายการที่ 3' },
  ];

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.dataList, event.previousIndex, event.currentIndex);
  }

  openEditModal(item: any) {
    console.log('Edit:', item);
  }
  removeItem(id: number) {
    this.dataList = this.dataList.filter((i) => i.id !== id);
  }
}
