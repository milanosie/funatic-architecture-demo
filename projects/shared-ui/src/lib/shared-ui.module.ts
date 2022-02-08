import {NgModule} from '@angular/core';
import {DocumentOverviewComponent} from './document-overview/document-overview.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
    declarations: [DocumentOverviewComponent],
    imports: [
        CommonModule,
    ],
    exports: [DocumentOverviewComponent]
})
export class SharedUiModule {
}
