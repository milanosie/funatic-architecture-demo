import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentOverviewComponent} from './document-overview/document-overview.component';
import {SharedUiModule} from 'shared-ui';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: DocumentOverviewComponent
    }
];


@NgModule({
    declarations: [DocumentOverviewComponent],
    imports: [
        CommonModule,
        SharedUiModule,
        RouterModule.forChild(routes),
        MatButtonModule,
    ]
})
export class DocumentsModule {
}
