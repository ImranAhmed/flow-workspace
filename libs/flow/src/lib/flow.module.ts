import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NoticeComponent } from './components/notice/notice.component';

export const flowRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NoticeComponent],
  exports: [NoticeComponent],
})
export class FlowModule {}
