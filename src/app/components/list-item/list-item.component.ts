import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  template: `
    <div class="flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
         cdkDrag>
      
      <div class="flex items-center gap-4">
        <div class="cursor-grab active:cursor-grabbing text-gray-400 hover:text-blue-500 transition-colors" 
             cdkDragHandle>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>
        </div>

        <div class="flex flex-col">
          <span class="text-sm font-semibold text-gray-800">{{ name }}</span>
          <span class="text-xs text-gray-500">ID: {{ id }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button (click)="edit.emit()" 
                class="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          แก้ไข
        </button>
        <button (click)="delete.emit()" 
                class="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
          ลบ
        </button>
      </div>
    </div>
  `
})
export class ListItemComponent {
  @Input() id: number | string = 0;
  @Input() name: string = '';
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
