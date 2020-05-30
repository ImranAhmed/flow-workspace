import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiKitModule } from '@flow-workspace/ui-kit';
import { FlowModule } from './../../../../libs/flow/src/lib/flow.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiKitModule, FlowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
