import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilitiesModule } from '@flow-workspace/utilities';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [CommonModule, UtilitiesModule],
  declarations: [UserDetailsComponent, AppLayoutComponent],
  exports: [UserDetailsComponent, AppLayoutComponent],
})
export class UiKitModule {}
