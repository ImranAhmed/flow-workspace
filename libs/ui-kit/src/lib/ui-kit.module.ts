import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule as FlowCommon } from '@flow-workspace/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './containers/user/user.component';

@NgModule({
  imports: [CommonModule, FlowCommon],
  declarations: [UserComponent, UserDetailsComponent],
  exports:[UserComponent, UserDetailsComponent]
})
export class UiKitModule {}
