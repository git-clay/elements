import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatDatepickerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestComponent } from './test/test.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@NgModule({
  declarations: [
    TestComponent,
    TestDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  entryComponents: [
    TestComponent,
    TestDialogComponent
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(TestComponent, { injector: this.injector });
    customElements.define('app-test', el);
    const dialog = createCustomElement(TestDialogComponent, { injector: this.injector });
    customElements.define('app-test-dialog', dialog);
  }
}
