import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common'; // เพิ่ม CommonModule เพื่อใช้ ngFor


// กำหนดโครงสร้างข้อมูลให้ชัดเจน
interface DocumentDetail {
  id: string;
  name: string;
}

interface WorkDItem {
  id: string;
  name: string;
  favorite: boolean;
  type: string;
  display_order: number;
  document_detail: DocumentDetail[];
  isOpen?: boolean; // สำหรับจัดการการเปิด-ปิดในหน้า UI
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule],
})
export class ParentComponent {
  // Mock ข้อมูลชุดใหม่ตามที่คุณต้องการ
  data: WorkDItem[] = [
    {
      id: "019956b4-3f9f-7800-af70-cb08dda36663",
      name: "คู่มือการใช้งานระบบ workD Platform",
      favorite: false,
      type: "DOCUMENT",
      display_order: 1,
      document_detail: [
        { id: "d1", name: "คู่มือ Portal DGA - Domain Admin" },
        { id: "d2", name: "คู่มือ Portal DGA - User" }
      ]
    },
    {
      id: "019a2f6e-1910-7366-ae42-9d6a77be477a",
      name: "คู่มือการใช้งานระบบ workD Platform ปีงบประมาณ 2569",
      favorite: false,
      type: "DOCUMENT",
      display_order: 2,
      document_detail: [
        { id: "d3", name: "คู่มือการใช้งาน workD EMAIL" }
      ]
    },
    {
      id: "019a2b4b-2ee3-7cb2-982a-668d66a501d7",
      name: "วิดีโอการใช้งาน workD Platform",
      favorite: false,
      type: "VIDEO",
      display_order: 3,
      document_detail: []
    }
  ];


// ฟังก์ชันย้ายระดับ "แม่" (Parent)
drop(event: CdkDragDrop<any[]>) {
  const previousData = JSON.parse(JSON.stringify(this.data));
  
  moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  
  // อัปเดตลำดับ display_order ของแม่
  this.updateDisplayOrder();

  this.printFinalResult('ย้ายระดับแม่', previousData);
}

// ฟังก์ชันย้ายระดับ "ลูก" (Child)
dropChild(event: CdkDragDrop<any[]>, parentItem: any) {
  // เก็บ State ทั้งหมดก่อนเปลี่ยนเพื่อเปรียบเทียบ
  const previousData = JSON.parse(JSON.stringify(this.data));

  // ย้ายตำแหน่งลูกในตัวแปร parentItem (ซึ่งอ้างอิง object ใน this.data อยู่แล้ว)
  moveItemInArray(parentItem.document_detail, event.previousIndex, event.currentIndex);

  // หมายเหตุ: ถ้าลูกต้องมี display_order ด้วย สามารถสั่งอัปเดตตรงนี้ได้
  
  this.printFinalResult(`ย้ายลูกในกลุ่ม: ${parentItem.name}`, previousData);
}

// Helper: อัปเดตลำดับ display_order ของแม่ให้ถูกต้องตาม Index จริง
updateDisplayOrder() {
  this.data.forEach((item, index) => {
    item.display_order = index + 1;
  });
}

// ฟังก์ชันแสดงผลลัพธ์สุดท้ายก้อนเดียว
printFinalResult(action: string, previousData: any) {
  console.log(`%c Action: ${action} `, 'background: #10b981; color: white; font-weight: bold;');
  console.log('--- ข้อมูลก่อนเปลี่ยน (Previous Full Data) ---');
  console.log(previousData);
  
  console.log('--- ข้อมูลล่าสุดที่พร้อมส่งหลังบ้าน (Current Full Data) ---');
  console.log(this.data); 
  
  // ตรงนี้คือจุดที่คุณสั่ง: this.http.post('api/save', this.data).subscribe(...)
}
  // ฟังก์ชันสลับการเปิด-ปิด
//   toggleAccordion(item: WorkDItem) {
//     item.isOpen = !item.isOpen;
//   }

//   drop(event: CdkDragDrop<any[]>) {
//     // 1. เก็บสำเนา Array ก่อนเปลี่ยน (Deep Clone ด้วย JSON เพื่อให้ค่าไม่ผูกกัน)
//     const previousArray = JSON.parse(JSON.stringify(this.data));

//     // 2. ย้ายตำแหน่งใน Array หลัก
//     moveItemInArray(this.data, event.previousIndex, event.currentIndex);

//     // 3. เก็บ Array หลังการเปลี่ยนแปลง
//     const currentArray = this.data; // ตัวแปรนี้จะเปลี่ยนค่าตาม moveItemInArray ไปแล้ว

//     // แสดงผลเปรียบเทียบใน Console
//     console.log('--- ข้อมูลชุดเดิม (ก่อนย้าย) ---');
//     console.log(previousArray);

//     console.log('--- ข้อมูลชุดใหม่ (หลังย้าย) ---');
//     console.log(currentArray);
    
//     // แสดงตำแหน่งและชื่อกลุ่มที่ย้าย
//     const movedItem = currentArray[event.currentIndex];
//     console.log(`คุณย้ายกลุ่ม: "${movedItem.name}" จาก Index ${event.previousIndex} -> ${event.currentIndex}`);
//   }
}