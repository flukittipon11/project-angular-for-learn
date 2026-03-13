// app.component.ts
import { Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component'; // path ที่คุณเก็บไฟล์ไว้
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex min-h-screen bg-gray-50">
      <nav class="w-64 bg-slate-800 text-white shadow-xl">
        <div class="p-6">
          <h2 class="text-2xl font-bold tracking-wider text-blue-400">
            ADMIN PANEL
          </h2>
          <p class="text-xs text-slate-400 mt-1">ระบบทดสอบเวอร์ชัน 1.0</p>
        </div>

        <ul class="mt-4 space-y-2 px-4">
          <li>
            <a
              routerLink="/manage-users"
              routerLinkActive="bg-blue-600 text-white"
              class="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-slate-700 text-slate-300"
            >
              <span class="text-lg">👥</span>
              <span>จัดการผู้ใช้งาน</span>
            </a>
          </li>

          <li>
            <a
              routerLink="/settings"
              routerLinkActive="bg-blue-600 text-white"
              class="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-slate-700 text-slate-300"
            >
              <span class="text-lg">⚙️</span>
              <span>ตั้งค่าระบบ</span>
            </a>
          </li>
        </ul>
      </nav>

      <main class="flex-1 flex flex-col">
        <header class="bg-white shadow-sm py-4 px-8">
          <h1 class="text-xl font-semibold text-gray-700">Drag and Drop</h1>
        </header>

        <div class="p-8">
          <div class="bg-white rounded-xl shadow-md p-6 min-h-[500px]">
            <router-outlet></router-outlet>

            <div class="mt-10 pt-10 border-t border-dashed">
              <p class="text-xs text-gray-400 mb-2">
                Debug Mode: Parent Component
              </p>
              <app-parent></app-parent>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      /* ใช้ CSS เพิ่มเติมสำหรับลูกเล่นที่ Tailwind ทำยากๆ */
      .active-link {
        @apply bg-blue-600 text-white shadow-lg shadow-blue-900/20;
      }
    `,
  ],
})
export class AppComponent {}
