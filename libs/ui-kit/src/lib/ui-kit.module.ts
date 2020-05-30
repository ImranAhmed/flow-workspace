import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilitiesModule } from '@flow-workspace/utilities';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [CommonModule, UtilitiesModule],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent],
})
export class UiKitModule {}
