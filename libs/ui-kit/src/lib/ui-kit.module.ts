import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { UtilitiesModule } from '@flow-workspace/utilities';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    UtilitiesModule,
    ClarityModule,
  ],
  declarations: [UserDetailsComponent, AppLayoutComponent],
  exports: [UserDetailsComponent, AppLayoutComponent],
})
export class UiKitModule {}
