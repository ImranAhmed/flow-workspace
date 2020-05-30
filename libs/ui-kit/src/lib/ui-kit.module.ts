import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule as FlowCommon } from '@flow-workspace/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [CommonModule, FlowCommon],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent],
})
export class UiKitModule {}
