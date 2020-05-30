import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiKitModule } from '@flow-workspace/ui-kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
