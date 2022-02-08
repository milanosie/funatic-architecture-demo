import {NgModule} from '@angular/core';
import {DocumentOverviewComponent} from './document-overview/document-overview.component';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [DocumentOverviewComponent],
    imports: [
        CommonModule
    ],
    exports: [DocumentOverviewComponent]
})
export class SharedUiModule {
}
