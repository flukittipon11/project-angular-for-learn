// app.component.ts
import { Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component'; // path ที่คุณเก็บไฟล์ไว้

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent], // ต้องใส่ชื่อ Component ตรงนี้เพื่อให้ HTML รู้จัก
  template: `
    <main class="min-h-screen bg-gray-100 py-10">
      <h1 class="text-center text-3xl font-extrabold text-slate-900 mb-8">
        ระบบจัดการงาน OneGeo
      </h1>
      
      <app-parent></app-parent>
    </main>
  `
})
export class AppComponent {}